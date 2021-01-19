import { User } from "../db.ts";

export default {
    create: async (context: any) => {
        try {
            // Get the body from request
            const body: any = await context.request.body();
            // Get the fields from body
            const { name, email } = await body.value;

            // Insert the data into the database
            const id = await User.insertOne({
                name: name,
                email: email
            });

            // Send the response
            context.response.body = { id };
            context.response.status = 201;
        } catch (error) {
            context.response.body = error;
            context.response.status = 500;
            console.log(error);
        }
    },
    get: async (context: any) => {
        try {
            // Fetch the data from the database
            const users = await User.find({});

            // Send the response
            context.response.body = users;
            context.response.status = 200;
        } catch (error) {
            context.response.body = error;
            context.response.status = 500;
            console.log(error);
        }
    },
    update: async (context: any) => {
        try {
            // Get the id
            const id: string = await context.params.id;
            // Get the body from request
            const body: any = await context.request.body();
            // Get the fields from body
            const { name, email } = await body.value;

            // Insert the data into the database
            const result = await User.updateOne({
                _id: id,
            }, {
                $set: {
                    name: name,
                    email: email,
                }
            });

            // Send the response
            context.response.body = { result };
            context.response.status = 201;
        } catch (error) {
            context.response.body = error;
            context.response.status = 500;
            console.log(error);
        }
    },
    delete: async (context: any) => {
        try {
            // Get the id
            const id: string = await context.params.id;

            // Delete the data from the database
            const result = await User.deleteOne({
                _id: id,
            });

            // Send the response
            context.response.body = { result };
            context.response.status = 204;
        } catch (error) {
            context.response.body = error;
            context.response.status = 500;
            console.log(error);
        }
    },
};