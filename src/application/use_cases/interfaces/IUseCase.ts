import { Result } from '../../../domain/aggregate-root/Result';

export interface IUseCase<Request, Response>{
 execute:(request:Request, repository: any) => Promise<Result<Response>>
}