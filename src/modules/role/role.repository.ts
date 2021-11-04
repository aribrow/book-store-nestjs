import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../role/role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
