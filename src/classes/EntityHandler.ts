import {Entity} from "./Entity"

//Singleton
export class EntityService {
    private static instance: EntityService;
    private constructors() {}
    managedEntities: Entity[] = []


    public static getInstance(): EntityService
    {
        if (!EntityService.instance) {
            EntityService.instance = new EntityService();
        }

        return EntityService.instance;
    }
}