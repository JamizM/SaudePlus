import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 20 }}>Faça seu Cadastro</BigText>
            <StyledTextInput
                label="E-mail"
                icon="email-variant"
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ marginBottom: 20 }}
            />
            <StyledTextInput
                label="Nome Completo"
                icon="account"
                value={name}
                onChangeText={setName}
                placeholder="Seu Nome"
                style={{ marginBottom: 20 }}
            />
            <StyledTextInput
                label="Senha"
                icon="lock-open"
                value={password}
                onChangeText={setPassword}
                placeholder="Sua Senha"
                isPassword
                style={{ marginBottom: 20 }}
            />

            <RegularButton
                onPress={() => {
                    alert("Armazenando Dados...");
                }}
            >
                Continuar
            </RegularButton>

            <StatusBar style="auto" />
        </MainContainer>
    );
}
