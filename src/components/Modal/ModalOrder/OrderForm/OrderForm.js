import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './OrderForm.scss';

export default function OrderForm() {
    const formik = useFormik({
        initialValues: {
            name: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required().email(),
            phone: Yup.number().required(),
        }),
        onSubmit: async(formData) => {
            try {
                console.log('envio de datos');
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <Form className="order-form" onSubmit={formik.handleSubmit}>
            <label className="order-form__label">Orden de Compra</label>
            <Form.Input 
                placeholder="Añadir Nombre" 
                name="name" 
                value={formik.values.name} 
                onChange={formik.handleChange}
                error={formik.errors.name && true}
            />
            <Form.Input 
                placeholder="Añadir Email" 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange}
                error={formik.errors.email && true}
            />
            <Form.Input 
                placeholder="Añadir Telefono" 
                name="phone" 
                value={formik.values.phone} 
                onChange={formik.handleChange}
                error={formik.errors.phone && true}
            />
            <Button className="order-form__btn" primary type="submit">Ordenar</Button>
        </Form>
    )
}
