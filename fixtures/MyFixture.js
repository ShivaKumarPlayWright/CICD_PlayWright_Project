import { test as baseTest, expect } from "@playwright/test";

export const test = baseTest.extend({
    fixture1: async ({ }, use) => {
        let fixturte1 = "Iam Fixture1";
        console.log("before part of fixture1");
        await use(fixturte1);
        console.log("after part of fixture1");
    },
    workerFixture1: [
        async ({ }, use) => {
            let workerFixture1 = "Iam workerFixture1";
            console.log("before part of workerFixture1");
            await use(workerFixture1);
            console.log("after part of workerFixture1");
        }, { scope: "worker" }
    ]
});
// export {expect};