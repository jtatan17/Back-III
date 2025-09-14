import { describe, it } from "mocha";
import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

describe("Pruebas de API con Supertest", function () {
  this.timeout(10_000);

  /**
   * 🐶 POST /api/pets/createPet
   * Crea una nueva mascota y valida que el payload tenga el _id y la especie enviada.
   */
  describe("Test router pets", () => {
    it("Debe crear una mascota en /api/pets/createPet", async () => {
      let petMock = {
        name: "Rocky",
        specie: "test",
        birthDate: new Date(2025, 11, 18).toISOString(),
      };

      let resultado = await requester
        .post("/api/pets/createPet")
        .set("Content-Type", "application/json")
        .send(petMock);

      expect(resultado.status).to.be.eq(200);
      expect(resultado.body).to.have.property("payload");
      expect(resultado.body.payload).to.have.property("_id");
      expect(resultado.body.payload.specie).to.equal("test");
    });
  });

  /**
   * 👥 GET /api/users/
   * Obtiene todos los usuarios en la base de datos y valida que el resultado sea un arreglo.
   */
  describe("Test router users - GET", () => {
    it("Debe obtener todos los usuarios en /api/users/", async () => {
      let resultado = await requester.get("/api/users/");

      console.log("🔍 RESPONSE BODY (GET USERS):", resultado.body);

      expect(resultado.status).to.be.eq(200);
      expect(resultado.body).to.have.property("payload");
      expect(resultado.body.payload).to.be.an("array");
    });
  });

  /**
   * ✏️ PUT /api/users/:uid
   * Actualiza la información de un usuario existente y valida que el cambio se aplique.
   */
  describe("Test router users - PUT", () => {
    it("Debe actualizar un usuario en /api/users/:uid", async () => {
      const userId = "689aa3a03d99f8c5b54f6936"; // ⚠️ ID real que ya probaste en Postman

      let updateData = {
        first_name: "NuevoNombre",
        last_name: "Actualizado",
      };

      let resultado = await requester
        .put(`/api/users/${userId}`)
        .set("Content-Type", "application/json")
        .send(updateData);

      console.log("🔍 RESPONSE BODY (PUT USER):", resultado.body);

      expect(resultado.status).to.be.eq(200);
      expect(resultado.body).to.have.property("payload");
      expect(resultado.body.payload.first_name).to.equal("NuevoNombre");
      expect(resultado.body.payload.last_name).to.equal("Actualizado");
    });
  });
});
