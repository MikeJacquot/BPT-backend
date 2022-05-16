import { Injectable, NotFoundException } from '@nestjs/common';

import { UserFamilyRelationship } from './entities/user-family-relationship.entity';

@Injectable()
export class RelationshipsService {


    async getFamilyFromUser(userId: string): Promise<any[]> {

        const res: UserFamilyRelationship[] = await UserFamilyRelationship.find({
            where: {
                family: {id: userId}
            },
            relations: ['family']
        });

        if (res == null) {
            throw new NotFoundException(`The UserFamilyRelationship cannot be found`);
        }
        return res.map((userFamilyRelationship: UserFamilyRelationship) => {userFamilyRelationship.family, userFamilyRelationship.falimyRelationship});
    }
}
