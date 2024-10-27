export const verifyToken = (): boolean => {
  const token = window.sessionStorage.getItem('bearer');
  return !!token;
}