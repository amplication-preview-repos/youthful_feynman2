import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DeveloperController } from "../developer.controller";
import { DeveloperService } from "../developer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  apiKey: "exampleApiKey",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  name: "exampleName",
  subscriptionPlan: "exampleSubscriptionPlan",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  apiKey: "exampleApiKey",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  name: "exampleName",
  subscriptionPlan: "exampleSubscriptionPlan",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    apiKey: "exampleApiKey",
    createdAt: new Date(),
    email: "exampleEmail",
    id: "exampleId",
    name: "exampleName",
    subscriptionPlan: "exampleSubscriptionPlan",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  apiKey: "exampleApiKey",
  createdAt: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  name: "exampleName",
  subscriptionPlan: "exampleSubscriptionPlan",
  updatedAt: new Date(),
};

const service = {
  createDeveloper() {
    return CREATE_RESULT;
  },
  developers: () => FIND_MANY_RESULT,
  developer: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Developer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeveloperService,
          useValue: service,
        },
      ],
      controllers: [DeveloperController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /developers", async () => {
    await request(app.getHttpServer())
      .post("/developers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /developers", async () => {
    await request(app.getHttpServer())
      .get("/developers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /developers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/developers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /developers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/developers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /developers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/developers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/developers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
