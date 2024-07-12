import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { ConfirmForm, FormActions, FormError, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const confirmFormSchema = z.object({
    name: z.string().min(3, {message: 'O nome precisa no minimo 3 caracteres'}),
    email: z.string().email({ message: 'Digite um e-mail válido' }),
    observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<ConfirmFormData>({
        resolver: zodResolver(confirmFormSchema),
    })

    function handleConfirmScheduling(data: ConfirmFormData) {
        console.log(data)
    }

    return (
        <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
            <FormHeader>
                <Text>
                    <CalendarBlank />
                    12 de julho de 2024
                </Text>
                <Text>
                    <Clock />
                    10:00h
                </Text>
            </FormHeader>

            <label>
                <Text size="sm">Nome completo</Text>
                <TextInput type="text" placeholder="Seu nome" {...register('name')} />
                {errors.name && (
                    <FormError size="sm">
                        {errors.name.message}
                    </FormError>
                )}
            </label>

            <label>
                <Text size="sm">Endereço de e-mail</Text>
                <TextInput type="email" placeholder="gamora@example.com" {...register('email')} />
                {errors.email && (
                    <FormError size="sm">
                        {errors.email.message}
                    </FormError>
                )}
            </label>

            <label>
                <Text size="sm">Observações</Text>
                <TextArea {...register('observations')} />
            </label>

            <FormActions>
                <Button type="button" variant="tertiary">
                    Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    Confirmar
                </Button>
            </FormActions>
        </ConfirmForm>
    )
}