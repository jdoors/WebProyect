import React from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik'

const Contactos = () => {
  return (
    <div>
        <p>hi!</p>
        <Formik>
            {()=> (
        <Form>
            <div>
                <label htmlFor='name'>Nombre</label>
                <Field type='text' id='name' name='name' placeholder='Nombre'/>
            </div>
            <div>
                <label htmlFor='email'>e_mail</label>
                <Field type='email' id='email' name='email' placeholder='e_mail'/>
            </div>
            <div>
                <label htmlFor='phone'>Teléfono</label>
                <Field type='text' id='phone' name='phone' placeholder='Teléfono'/>
            </div>

            <div>
                 <Field name='asunto' as='select'>
                     <option value='consulta'>Consulta </option>
                     <option value='reclamo'>Reclamo </option>
                     <option value='otros'>Otros </option>
                 </Field>
            </div>
            <div>
                 <Field name='textarea' as='textarea' placeholder='Mensaje'/>
            </div>

            <button type='submit'>Enviar</button>
        </Form>
        )}
        </Formik>
    </div>
  )
}

export default Contactos