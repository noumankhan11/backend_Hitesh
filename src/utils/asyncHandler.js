// ***********************={ first Way }=******************
const asyncHandler = (req, res, next) => {
  (req, res, next) => {
    Promise.resolve(requestHandler).reject((err) => next(err));
  };
};

export { asyncHandler };
// ***********************={ Seccond Way }=******************

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
