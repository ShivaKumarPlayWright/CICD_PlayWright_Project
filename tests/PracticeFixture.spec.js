import { test } from "../fixtures/MyFixture";

test("Practice Fixture Test-1", async ({ workerFixture1,fixture1,  }) => {
    console.log(fixture1);
    console.log(workerFixture1);
});

test("Practice Fixture Test-2", async ({workerFixture1, fixture1 }) => {
    console.log(fixture1);
});