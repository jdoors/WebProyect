import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contactos = () => {
  const [formEnviado, cambiarFormEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          asunto: "",
          textarea: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.name) {
            errores.name = "Por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre no debe contener números";
          }

          if (!valores.email) {
            errores.email = "Por favor ingrese su e-mail";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "El e-mail ingresado no es correcto";
          }

        

          if (isNaN(valores.phone)) {
            errores.phone = "El número ingresado no puede contener letras";
          }

          if (!valores.asunto) {
            errores.asunto = "Seleccione el motivo de su contacto";
          }

          if (valores.textarea.length <= 1) {
            errores.textarea = "Ingrese su mensaje";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          cambiarFormEnviado(true);
          setTimeout(() => cambiarFormEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="shadow-xl  shadow-orange-400 px-8 pt-6 pb-6  max-w-md mx-auto  rounded-xl  md:max-w-2xl space-y-2 mt-[10px] mb-20 font-poppins ">
            <div className="flex ">
              <div className="w-1/4 py-1 ml-2 md:w-1/4 md:py-1 md:ml-2">
                <label htmlFor="name" className="">
                  Nombre
                </label>
              </div>
              <div className="w-5/6 md:w-5/6">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="text-base -ml-1 md:-ml-10 block 
                            bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2
                            text-black leading-tight focus:outline-none focus:bg-white focus:border-orange-400"
                />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="ml-25 text-sm  md:-ml-9 text-red-600 ">{errors.name}</div>
                  )}
                />
              </div>
            </div>
            <div className="flex ">
              <div className="w-1/4 py-1 ml-2">
                <label htmlFor="email">e_mail</label>
              </div>
              <div className="w-5/6">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="text-base -ml-1 md:-ml-10 block 
                            bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2
                            text-black leading-tight focus:outline-none focus:bg-white focus:border-orange-400"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="ml-25 text-sm  md:-ml-9 text-red-600">{errors.email}</div>
                  )}
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 py-1 ml-2">
                <label htmlFor="phone">Teléfono</label>
              </div>
              <div className="w-5/6">
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="text-base -ml-1 md:-ml-10 block 
                            bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2
                            text-black leading-tight focus:outline-none focus:bg-white focus:border-orange-400"
                />
                <ErrorMessage
                  name="phone"
                  component={() => (
                    <div className="ml-25 text-sm  md:-ml-9 text-red-600">{errors.phone}</div>
                  )}
                />
              </div>
            </div>

            <div className="w-4/5  md:w-3/4 py-2 space-x-4 md:space-x-6">
              <p className="ml-2 ">Asunto:</p>
              <div className="  mt-2 space-x-3 md:space-x-9">
                <label className="hover:text-orange-500 hover:font-semibold">
                  <Field
                    type="radio"
                    name="asunto"
                    value="Consulta"
                    className="ml-[35px] md:ml-20"
                  />{" "}
                  Consulta
                </label>
                <label className="hover:text-orange-500 hover:font-semibold">
                  <Field type="radio" name="asunto" value="Reclamo" /> Reclamo
                </label>
                <label className="hover:text-orange-500 hover:font-semibold">
                  <Field type="radio" name="asunto" value="Otro" /> Otro
                </label>

                <div className="mt-2">
                  <ErrorMessage
                    name="asunto"
                    component={() => (
                      <div className="ml-6 text-sm  md:ml-12 text-red-600">{errors.asunto}</div>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-1/4 py-1 ml-2 ">
                <p className="">Mensaje:</p>
              </div>

              <div className="w-5/6 mt-5">
                <Field
                  name="textarea"
                  as="textarea"
                  className="text-base -ml-1 md:-ml-10 block 
                            bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2
                            text-black leading-tight focus:outline-none focus:bg-white focus:border-orange-400"
                />
                <ErrorMessage
                  name="textarea"
                  component={() => (
                    <div className="ml-25 text-sm  md:-ml-9 text-red-600">{errors.textarea}</div>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-center py-4 ">
              <button
                type="submit"
                className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold
                         hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded  font-poppins"
              >
                Enviar
              </button>
            </div>

            {formEnviado && (
              <div role="alert" className="w-full  mx-auto md:w-5/6">
                <div className="bg-green-600 text-white font-bold rounded-t px-3 py-1 ">
                  Enviado!
                </div>
                <div className="border border-t-0 border-green-400 rounded-b bg-white px-4 py-2 text-green-700">
                  <p> En breve nos pondremos en contacto!</p>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Contactos;
