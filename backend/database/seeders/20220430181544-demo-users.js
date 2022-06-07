"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("users", [
            {
                id: 1,
                uuid: "e79d11a3-991a-4ef7-8317-d76bad18bf29",
                name: "Brian Predovic",
                email: "Linnie_Bernier@yahoo.com",
                role: "Editor",
                password:
                    "$2a$12$OTXJVDW5.zfKMungLynUcuUwgNUzImUUayw2i.SUHCEFIP9GMDeBy",
                image: null,
                createdAt: "2022-06-07T11:06:25.059Z",
                updatedAt: "2022-06-07T11:06:25.059Z",
            },
            {
                id: 2,
                uuid: "25053c86-8d0b-4a60-acad-c0e07680452e",
                name: "Florence Jacobi",
                email: "Reyna_Labadie@hotmail.com",
                role: "Editor",
                password:
                    "$2a$12$IF78N8ClrMaq5EQEfhtrkeF6BH1stDFSdVJXDZu400VEzuRGGJgz.",
                image: null,
                createdAt: "2022-06-07T11:08:30.590Z",
                updatedAt: "2022-06-07T11:08:30.590Z",
            },
            {
                id: 3,
                uuid: "d3146b45-6b96-4057-8d76-9c2fe7b7877e",
                name: "Dr. Martin Kerluke",
                email: "Gus22@yahoo.com",
                role: "Editor",
                password:
                    "$2a$12$8smtmoDMNO.QcBXmuUlPJeNG8dKGOj9/C60vyNCdC48.VWabcjiPG",
                image: null,
                createdAt: "2022-06-07T11:13:13.992Z",
                updatedAt: "2022-06-07T11:13:13.992Z",
            },
            {
                id: 4,
                uuid: "0ce635cf-b60c-4e5d-83e3-afd56f383f2c",
                name: "Raquel Funk II",
                email: "Tremayne47@yahoo.com",
                role: "Editor",
                password:
                    "$2a$12$1EltHtwXdTVSZfZXaZ7Oku/CGJvx7jEjqVv1HJ.CK4NHVSnadDAYy",
                image: null,
                createdAt: "2022-06-07T11:13:15.507Z",
                updatedAt: "2022-06-07T11:13:15.507Z",
            },
            {
                id: 5,
                uuid: "7f5cbc6a-7b03-4776-b887-c1a7d28251e0",
                name: "Courtney Walsh",
                email: "Leann75@gmail.com",
                role: "Editor",
                password:
                    "$2a$12$rEF3pJXSfQHWa82wxN0Xc.1WFAtd9rre..CeZ/Ga1LV/8BO/dVM5G",
                image: null,
                createdAt: "2022-06-07T11:13:17.073Z",
                updatedAt: "2022-06-07T11:13:17.073Z",
            },
            {
                id: 6,
                uuid: "c21e153c-896b-41a6-aa68-0b7c29a9dd00",
                name: "Kellie Grant",
                email: "Ross16@yahoo.com",
                role: "General",
                password:
                    "$2a$12$Dlj0p9uxRdwYOf1vVo08VuskCzuqibKUdpJ42KnrQm51QKMlAmDPW",
                image: null,
                createdAt: "2022-06-07T11:13:18.567Z",
                updatedAt: "2022-06-07T11:13:18.567Z",
            },
            {
                id: 7,
                uuid: "ebcebbf7-64f3-4fbb-b280-e12b55a5603d",
                name: "Spencer Trantow",
                email: "Cameron21@yahoo.com",
                role: "General",
                password:
                    "$2a$12$ukzVRg4fFCQD7kZdqLYDmOqPDhgD5Oy.321swNrXd5Y9c4loL0Z/6",
                image: null,
                createdAt: "2022-06-07T11:13:19.878Z",
                updatedAt: "2022-06-07T11:13:19.878Z",
            },
            {
                id: 8,
                uuid: "b1eb51e1-4705-4b78-b14d-a81069d68e79",
                name: "Harriet Graham",
                email: "Piper_Fisher@yahoo.com",
                role: "General",
                password:
                    "$2a$12$gKwzmAyESVhrf.YAFQpnnOCqkWEBv29nofUtH441wexjjrosl8A3G",
                image: null,
                createdAt: "2022-06-07T11:13:21.255Z",
                updatedAt: "2022-06-07T11:13:21.255Z",
            },
            {
                id: 9,
                uuid: "da042925-9a7c-4e6e-a9a8-cd6a3497bbe4",
                name: "Matthew Mraz",
                email: "Margaretta68@hotmail.com",
                role: "General",
                password:
                    "$2a$12$/9iavJlbgVDTKXgeHXz5c.iPrE6Gpf.laACB12X46hroRGQZ5aux.",
                image: null,
                createdAt: "2022-06-07T11:13:31.039Z",
                updatedAt: "2022-06-07T11:13:31.039Z",
            },
            {
                id: 10,
                uuid: "411eb36f-346b-4817-ac3d-48b2970c3e36",
                name: "Ada Lehner",
                email: "Carlo.Osinski@hotmail.com",
                role: "General",
                password:
                    "$2a$12$uXR9I6E5ckKLgugGhn5ZeOClIpxmMa2.l1Dj37CRL4be8dkluMsJq",
                image: null,
                createdAt: "2022-06-07T11:39:43.716Z",
                updatedAt: "2022-06-07T11:39:43.716Z",
            },
            {
                id: 11,
                uuid: "45e2cefc-65cb-4ba3-aa1a-b1a3d3643e52",
                name: "Henry Senger",
                email: "Denis.Gibson30@hotmail.com",
                role: "General",
                password:
                    "$2a$12$4YH/G8yL3L0edfIfNfUt3uce2QPPV7QGuyrkNsEaayS9p410sOmne",
                image: null,
                createdAt: "2022-06-07T11:39:45.326Z",
                updatedAt: "2022-06-07T11:39:45.326Z",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    },
};
