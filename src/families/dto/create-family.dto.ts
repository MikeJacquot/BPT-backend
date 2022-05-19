import { IsEnum, IsString } from 'class-validator';
import { familyRelationshipsList, FamilyRelationshipType } from '../entities/family.entity';


export class CreateUpdateFamilyDto {

    @IsString()
    name: string;

    @IsEnum(familyRelationshipsList)
    familyRelationShip: FamilyRelationshipType;
}
