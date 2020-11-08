export interface IUseCase<Request, Response>{
 execute:(request:Request, repository:any) => Promise<Response>
}