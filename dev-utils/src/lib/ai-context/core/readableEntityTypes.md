type Media = { /* Define media type structure here */ };

type StrapiEntity<T> =
  T extends "api::property.property" ? {
    propertyId: number;
    propertyName: string;
    owner: StrapiEntity<"plugin::users-permissions.user">;
    relatedUsers: StrapiEntity<"plugin::users-permissions.user">[];
}
  :
  T extends "plugin::users-permissions.user" ? {
    username: string;
    email: any;
    provider: string;
    password: any;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: boolean;
    blocked: boolean;
    role: StrapiEntity<"plugin::users-permissions.role">;
    meta: string;
    ownedProperties: StrapiEntity<"api::property.property">[];
    relatedProperties: StrapiEntity<"api::property.property">[];
}
  : T extends "plugin::users-permissions.role"? any
  : never;
