import {
  Box,
  Spinner,
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Settings() {
  const [myProfile, setMyProfile] = useState({
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  useEffect(() => {
    axios
      .post("/api/obtenerPerfil", {
        id: uId,
      })
      .then(({ data }) => {
        setMyProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <TopBar color1="#868686" color2="#aaaaaa" title="Editar Perfil" />

      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box className="h2 gray1" px="4vh" py="3vh">
          <VStack spacing="2vh" align="stretch">
            <Box>
              <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                <Input
                  value={myProfile.name}
                  onChange={(ev) => {
                    setMyProfile({
                      ...myProfile,
                      name: ev.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>

            <Box>
              <FormControl id="gender" as="fieldset">
                <FormLabel as="legend">Género</FormLabel>
                <RadioGroup
                  value={myProfile.gender}
                  onChange={(value) => {
                    setMyProfile({
                      ...myProfile,
                      gender: value,
                    });
                  }}
                >
                  <VStack spacing="0" align="stretch">
                    <Radio value="m">Masculino</Radio>
                    <Radio value="f">Femenino</Radio>
                    <Radio value="o">Otro</Radio>
                    <Radio value="n">Prefiero no responder</Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="campus">
                <FormLabel>Campus</FormLabel>
                <Select
                  placeholder="Seleccionar campus"
                  value={myProfile.campus}
                  onChange={(ev) => {
                    setMyProfile({
                      ...myProfile,
                      campus: ev.target.value,
                    });
                  }}
                >
                  <option value="Isla Teja">Isla Teja</option>
                  <option value="Miraflores">Miraflores</option>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="degree">
                <FormLabel>Carrera</FormLabel>
                <Select
                  placeholder="Seleccionar carrera"
                  value={myProfile.degree}
                  onChange={(ev) => {
                    setMyProfile({
                      ...myProfile,
                      degree: ev.target.value,
                    });
                  }}
                >
                  <option value="Administración Empresas de Turismo">
                    Administración Empresas de Turismo
                  </option>
                  <option value="Administración Pública">
                    Administración Pública
                  </option>
                  <option value="Agronomía">Agronomía</option>
                  <option value="Antropología">Antropología</option>
                  <option value="Arquitectura">Arquitectura</option>
                  <option value="Artes Musicales y Sonoras">
                    Artes Musicales y Sonoras
                  </option>
                  <option value="Auditoría">Auditoría</option>
                  <option value="Bachillerato en Cs. de la Ingeniería">
                    Bachillerato en Cs. de la Ingeniería
                  </option>
                  <option value="Biología Marina">Biología Marina</option>
                  <option value="Bioquímica">Bioquímica</option>
                  <option value="Creación Audiovisual">
                    Creación Audiovisual
                  </option>
                  <option value="Derecho">Derecho</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Enfermería">Enfermería</option>
                  <option value="Geografía">Geografía</option>
                  <option value="Geología">Geología</option>
                  <option value="Ingeniería en Alimentos">
                    Ingeniería en Alimentos
                  </option>
                  <option value="Ingeniería en Conservación de Recursos Naturales">
                    Ingeniería en Conservación de Recursos Naturales
                  </option>
                  <option value="Ingeniería Comercial">
                    Ingeniería Comercial
                  </option>
                  <option value="Ingeniería Civil Acústica">
                    Ingeniería Civil Acústica
                  </option>
                  <option value="Ingeniería Civil Electrónica">
                    Ingeniería Civil Electrónica
                  </option>
                  <option value="Ingeniería Civil en Informática">
                    Ingeniería Civil en Informática
                  </option>
                  <option value="Ingeniería Civil en Obras Civiles">
                    Ingeniería Civil en Obras Civiles
                  </option>
                  <option value="Ingeniería Civil Industrial">
                    Ingeniería Civil Industrial
                  </option>
                  <option value="Ingeniería Civil Mecánica">
                    Ingeniería Civil Mecánica
                  </option>
                  <option value="Ingeniería en Construcción">
                    Ingeniería en Construcción
                  </option>
                  <option value="Ingeniería Naval">Ingeniería Naval</option>
                  <option value="Interpretación Musical">
                    Interpretación Musical
                  </option>
                  <option value="Kinesiología">Kinesiología</option>
                  <option value="Licenciatura en Ciencias con Mención">
                    Licenciatura en Ciencias con Mención
                  </option>
                  <option value="Licenciatura en Artes Visuales">
                    Licenciatura en Artes Visuales
                  </option>
                  <option value="Medicina">Medicina</option>
                  <option value="Medicina Veterinari">
                    Medicina Veterinaria
                  </option>
                  <option value="Obstetricia y Puericultura">
                    Obstetricia y Puericultura
                  </option>
                  <option value="Odontología">Odontología</option>
                  <option value="Pedagogía en Comunicación en Lengua Inglesa">
                    Pedagogía en Comunicación en Lengua Inglesa
                  </option>
                  <option value="Pedagogía en Educación Física, Deportes y Recreación">
                    Pedagogía en Educación Física, Deportes y Recreación
                  </option>
                  <option value="Pedagogía en Educación Parvularia">
                    Pedagogía en Educación Parvularia
                  </option>
                  <option value="Pedagogía en Historia y Ciencias Sociales">
                    Pedagogía en Historia y Ciencias Sociales
                  </option>
                  <option value="Pedagogía en Lenguaje y Comunicación">
                    Pedagogía en Lenguaje y Comunicación
                  </option>
                  <option value="Periodismo">Periodismo</option>
                  <option value="Psicología">Psicología</option>
                  <option value="Química y Farmacia">Química y Farmacia</option>
                  <option value="Tecnología Médica">Tecnología Médica</option>
                  <option value="Terapia Ocupacional">
                    Terapia Ocupacional
                  </option>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="hasCabin" as="fieldset">
                <FormLabel as="legend">Tengo cabaña</FormLabel>
                <RadioGroup
                  value={myProfile.hasCabin ? "s" : "n"}
                  onChange={(value) => {
                    setMyProfile({
                      ...myProfile,
                      hasCabin: value === "s",
                    });
                  }}
                >
                  <VStack spacing="0" align="stretch">
                    <Radio value="s">Sí</Radio>
                    <Radio value="n">No</Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="description">
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  placeholder="..."
                  value={myProfile.description}
                  onChange={(ev) => {
                    setMyProfile({
                      ...myProfile,
                      description: ev.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Button
                colorScheme="green"
                onClick={async () => {
                  await axios.post("/api/editarPerfil", myProfile);
                  push("/myProfile");
                }}
              >
                Guardar
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
}
