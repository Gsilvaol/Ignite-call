import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { ConfirmForm, FormActions, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";

export function ConfirmStep() {
    function handleConfirmScheduling() { }

    return (
        <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
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
                <TextInput type="text" placeholder="Seu nome" />
            </label>

            <label>
                <Text size="sm">Endereço de e-mail</Text>
                <TextInput type="email" placeholder="gamora@example.com" />
            </label>

            <label>
                <Text size="sm">Observações</Text>
                <TextArea />
            </label>

            <FormActions>
                <Button type="button" variant="tertiary">
                    Cancelar 
                </Button>
                <Button type="button">
                    Confirmar 
                </Button>
            </FormActions>
        </ConfirmForm>
    )
}