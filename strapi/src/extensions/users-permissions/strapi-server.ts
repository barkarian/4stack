"use strict";
module.exports = (plugin) => {
    // plugin.config = {
    //     jwt: {
    //         expiresIn: process.env.JWT_EXPIRES_IN,
    //     },
    // }

    plugin.controllers.user.me = async (ctx) => {
        //<4S_CODE_BLOCK #You could add your custom code if needed
        //ATTENTION: All signed data(user object in this case) is visible to the client, so don't put sensitive data in the jwt
        const user = await strapi.query("plugin::users-permissions.user").findOne({
            where: { id: ctx.state.user.id },
            populate: {},
        });
        if (!user) {
            return ctx.unauthorized();
        }
        const jwt = strapi.plugins['users-permissions'].services.jwt.issue(user);
        //4S_CODE_BLOCK>

        ctx.body = { user, jwt };
    };
    return plugin;
};