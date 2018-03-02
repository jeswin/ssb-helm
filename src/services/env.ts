export function getHomeDirectory() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}
