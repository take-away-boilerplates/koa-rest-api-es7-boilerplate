// If you have specific jobs that have to run once in a while, you
// can define them here or import them to organize
// your jobs in categories. For example, given
// a job to populate a database with data
// from a nexternal data, you could either:
// 1) Define the job here:
// 
//   export const populateExternalData = async () => {
//     const datas = await externalService.getAll();
//     await Data.bulkWrite(
//       datas.map((data) => ({
//         updateOne: {
//           filter: { externalId: data.id },
//           update: {
//             $set: data,
//           },
//           upsert: true,
//         },
//       })),
//     );
//   };
//
// 2) Or import your jobs based on categories
// export * as externalJobs from './externalJobs.js';
// 