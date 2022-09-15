
import { Field, FieldArray, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { APIUrl, backgroundColor } from "../constants";
import { Application, JobOffer, shop, shopCreate } from "../interfaces";
import { getCurrentUser, postPutDeletRequest } from "../hoooks";
import { useEffect, useState } from "react";
import Loading from "./Loading";
interface props {
  changObject:shop|undefined;
  finishFunction:()=>void
}

const FormulaireShop: React.FC<props> = (props) => {

  const changObject =  props.changObject;
  const object1:string = changObject?changObject.name:"";
  const object2:string = changObject?changObject.description:"";
  const object3:string = changObject?changObject.place:'';
  const object4:string = changObject?changObject.name:"";
  const object5:string = changObject?changObject.name:"";
  const object6:string = changObject?changObject.name:"";

  const formik = useFormik({
    initialValues: {
      name: object1,
      description: object2,
      place: object3
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(100, "Caractère inferieur ou egale à 100")
        .required("Requis"),
      place: Yup.string()
        .max(100, "Caractère inferieur ou egale à 100")
        .required("Requis"),
      description: Yup.string()
        .max(100, "Caractère inferieur ou egale à 100")
        .required("Requis"),
    }),
    onSubmit: (values) => {

      setLoadingCheck(true);

      
      const objectData:shopCreate = {
        name:values.name,
        description:values.description,
        place:values.place
      };


      try{
        if (changObject==undefined) {
          postPutDeletRequest("/shops",objectData,null,true,false,()=>{setLoadingCheck(false);props.finishFunction()},()=>{},myToken);
        }else{
          postPutDeletRequest("/shops",objectData,changObject.idShop,false,true,()=>{setLoadingCheck(false);props.finishFunction()},()=>{},myToken);
        }
        
      } catch (error){};
    },
  });

  
  const [myToken,setMyToken] = useState<string>();
  const [activUpdat, setActivUpdat] = useState<boolean>(false);
  
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      const subtitutionValue:string =  user.accessToken
      setMyToken(subtitutionValue);
    }
  }, []);



  const [loadingCheck, setLoadingCheck] = useState<boolean>(false);

  if (true) {
    return (
      <div className="componentForm">
          <div className="d-flex flex-column bd-highlight">
            <div className="">
              {'      '}<h3 className="">Modifier lieu d'acquisition</h3>
            </div>
            <form
              action=""
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
            >
                <div className="form-group">
                  <label htmlFor="id" className="label_input">
                    Nom:
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Nom complet"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name ? (
                    <p> {formik.errors.name} </p>
                  ) : null}
                </div>                         

              <div className="form-group">
                <label htmlFor="id" className="label_input">
                place:
                </label>
                <input
                  
                  id="place"
                  type="textarea"
                  className="form-control"
                  placeholder="place"
                  value={formik.values.place}
                  onChange={formik.handleChange}
                />
                {formik.errors.place ? <p> {formik.errors.place} </p> : null}
              </div> 
                    
              <div className="form-group">
                <label htmlFor="id" className="label_input">
                Description:
                </label>
                <input
                  id="description"
                  type="textarea"
                  className="form-control"
                  placeholder="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                {formik.errors.description ? <p> {formik.errors.description} </p> : null}
              </div> 

              <span className="d-flex justify-content-center">
                <button type="submit" className={"btn btn-outline-secondary"}>
                  {"Confirmer".toUpperCase()}
                </button>
              </span>

            </form>

          </div>
          {loadingCheck?Loading(()=>{setLoadingCheck(false)}):<></>}
      </div>
    );
  }else{
    return(<></>)
  }

};

export default FormulaireShop;
