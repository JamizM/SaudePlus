import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUs from "@screens/AboutUs";
import Calendar from "@screens/Calendar";
import CameraTest from "@screens/CameraTest";
import Configuration from "@screens/Configuration";
import DeleteEmail from "@screens/DeleteEmail";
import HistoricExams from "@screens/HistoricExams";
import HistoricExams_Cholesterol from "@screens/HistoricExams_Cholesterol";
import HistoricExams_Glicose from "@screens/HistoricExams_Glicose";
import HistoricExams_Hemogram from "@screens/HistoricExams_Hemogram";
import HistoricExams_TGO from "@screens/HistoricExams_TGO";
import HistoricExams_TGP from "@screens/HistoricExams_TGP";
import InitialPage from "@screens/InitialPage";
import MainPage from "@screens/MainPage";
import Map from "@screens/Map";
import MedicalAppoitment from "@screens/MedicalAppoitment";
import MedicinePage from "@screens/MedicinePage";
import NewEmail from "@screens/NewEmail";
import NewPassword from "@screens/NewPassword";
import PageForCodeDigit from "@screens/PageForCodeDigit";
import PasswordForget from "@screens/PasswordForget";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import SupportContact from "@screens/SupportContact";
import TGT from "@screens/TextGridTest";
import GoogleModal from "components/Modal/GoogleModal";

const Stack = createStackNavigator();

export default function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name=" " component={InitialPage} />
                <Stack.Screen name="Login" component={SignIn} />
                <Stack.Screen name="Cadastro" component={SignUp} />
                <Stack.Screen name="PaginaInicial" component={MainPage} />
                <Stack.Screen
                    name="PasswordForget"
                    component={PasswordForget}
                />
                <Stack.Screen name="NewEmail" component={NewEmail} />
                <Stack.Screen name="DeleteEmail" component={DeleteEmail} />
                <Stack.Screen name="Exames" component={HistoricExams} />
                <Stack.Screen name="MedicinePage" component={MedicinePage} />
                <Stack.Screen
                    name="Hemograma"
                    component={HistoricExams_Hemogram}
                />
                <Stack.Screen
                    name="Glicose"
                    component={HistoricExams_Glicose}
                />
                <Stack.Screen
                    name="Colesterol"
                    component={HistoricExams_Cholesterol}
                />
                <Stack.Screen name="TGO" component={HistoricExams_TGO} />
                <Stack.Screen name="TGP" component={HistoricExams_TGP} />
                <Stack.Screen name="Configuration" component={Configuration} />
                <Stack.Screen
                    name="MedicalAppoitment"
                    component={MedicalAppoitment}
                />
                <Stack.Screen
                    name="PageForCodeDigit"
                    component={PageForCodeDigit}
                />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="Mapa" component={Map} />
                <Stack.Screen
                    name="SupportContact"
                    component={SupportContact}
                />
                <Stack.Screen name="Sobre Nos" component={AboutUs} />
                <Stack.Screen name="GoogleModal" component={GoogleModal} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
