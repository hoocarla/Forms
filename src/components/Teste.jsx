import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  export default function Alerta(props){
    return (
        <Alert status={props.status} variant={props.variant} >
            <AlertIcon />
            <AlertTitle>{props.titulo}</AlertTitle>
            <AlertDescription>{props.descricao}</AlertDescription>
        </Alert>
    )
  }