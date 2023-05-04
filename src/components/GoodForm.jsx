import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import Alerta from "../components/Teste"; 


const GoodForm = () => {

  const [status, setStatus] = useState(false)

  const { register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log({ errors });


  const onSubmit = (data) => {

    setStatus(true)

    setTimeout(() => {
      setStatus(false)
    }, 1500);
  };


  return (
    <>
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Digite seu nome..."
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className="error-message">Campo obrigatorio</p>
        )}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          placeholder="Seu e-mail"
          {...register('email', { required: true, validate:(value) => validator.isEmail(value), })}
        />

        {errors?.email?.type === 'required' && (
          <p className="error-message">Campo obrigatório</p>
        )}

        {errors?.email?.type === 'validate' && (
           <p className="error-message">Email is invalid</p>)
        }
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          className={errors?.password && "input-error"}
          type="password"
          placeholder="Digite sua Senha"
          {...register("password", { require: true, minLength: 8 })} //regra da senha que deve conter no minimo 8 caracteres.
        />
        {errors?.password?.type === "riquired" && (
          <p className="error-message">Senha obrigatória.</p>
        )}

        {errors?.password?.type === "minLength" && (
          <p className="error-message">
            A senha deve conter no minimo 8 caracteres
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Profissão</label>
        <select
          {...register('profession', {
            validate: (value) => {
              return value !== "0";
            },
          })}
          className={errors?.profession && "input-error"}
        >
          <option value="0">Selecione sua profissão...</option>
          <option value="developer">Desenvolvedor</option>
          <option value="other">Outra</option>
        </select>

        {errors?.profession && (
          <p className="error-message">Profisao requerida</p>
        )}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            {...register("privacyTerms", { required: true })}
          />
          <label>Eu concordo com os termos de privacidade.</label>
        </div>

        {errors?.privacyTerms?.type === "required" && (
          <p className="error-message">
            Você precisa concordar com a politica de privacidade.
          </p>
        )}
      </div>

      <div className="form-group">
        <button onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
      </div>


      <div className={status ? "divStatus" : "none"}>
      <Alerta status='success' variant='solid' titulo="Sucesso!" descricao="Usuáro cadastrado com sucesso!" />
      </div>
    </div>
    </>
  )
};

export default GoodForm;
