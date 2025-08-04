export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  typeDocument: string;
  numberDocument: string;
  phone: string;
  registrationDate: Date;
  role: string;
  deletedAt?: Date;
}
