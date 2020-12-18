export class APIResult<T> {
  message: string;
  isSuccess: boolean;
  data: T;
}
