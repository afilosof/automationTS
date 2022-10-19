export function errorHandler(err: any) {
  throw new Error('Error message: ' + err.message);
}
