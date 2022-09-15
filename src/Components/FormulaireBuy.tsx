
import { Field, FieldArray, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { APIUrl, backgroundColor } from "../constants";
import { activity, Application, buyCreateWhithMaterial, JobOffer, material, materialCreate, moveCreateWhithStore, shop, store, useCreateWhithMaterial } from "../interfaces";
import { axiosGetWithPage, getCurrentUser, postPutDeletRequest } from "../hoooks";
import { useEffect, useState } from "react";
import Loading from "./Loading";


const FormulaireBuy: React.FC = () => {


const [materials, setMaterials] = useState<material[]>([])
const [activitys, setActivitys] = useState<activity[]>([])
const [shops, setShops] = useState<shop[]>([])
const [stores, setStores] = useState<store[]>([])

useEffect(()=>{
  axiosGetWithPage("/materials",1,100,myToken,setMaterials,()=>{},()=>{console.log("materials");});
  axiosGetWithPage("/activitys",1,100,myToken,setActivitys,()=>{},()=>{console.log("activitys");});
  axiosGetWithPage("/shops",1,100,myToken,setShops,()=>{},()=>{console.log("shops");});
  axiosGetWithPage("/stores",1,100,myToken,setStores,()=>{},()=>{console.log("stores");});
},[])


useEffect(()=>{
  console.log(materials);
  console.log(activitys);
  console.log(shops);
  console.log(stores);
},[materials,activitys,shops,stores])






  const formik = useFormik({
    initialValues: {
      quantity: 0,
      cost: 0,
      shop: '',
      material: '',
      store: '',

    },
    validationSchema: Yup.object({
      material: Yup.number()
      .required("Requis"),
      shop: Yup.number()
      .required("Requis"),
      store: Yup.number()
      .required("Requis"),
      quantity: Yup.number()
        .max(100000, "heure trop élevé (>100000)")
        .required("Requis")
        .typeError('Saisissez des chiffres'),
      cost: Yup.number()
        .max(100000, "heure trop élevé (>100000)")
        .required("Requis")
        .typeError('Saisissez des chiffres'),
    }),
    onSubmit: (values) => {

      setLoadingCheck(true);

      
      const objectData = {
        quantity: values.quantity,
        cost: values.cost,
        material: {idMaterial:values.material},
        shop:{idShop:values.shop},
        store:{idStore:values.store}
      };


      try{
        postPutDeletRequest("/buys/by-material",objectData,null,true,false,()=>{setLoadingCheck(false)},()=>{},myToken);
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
              {'      '}<h3 className="">Ajouter des materiaux</h3>
            </div>
            <form
              action=""
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
            >
            
              <div className="form-group">
                <label htmlFor="id" className="label_input">
                  Quantité:
                </label>
                <input
                  id="quantity"
                  type="text"
                  className="form-control"
                  placeholder="salaire"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                />
                {formik.errors.quantity ? <p> {formik.errors.quantity} </p> : null}
              </div> 

              <div className="form-group">
                <label htmlFor="id" className="label_input">
                  Prix:
                </label>
                <input
                  id="cost"
                  type="text"
                  className="form-control"
                  placeholder="salaire"
                  value={formik.values.cost}
                  onChange={formik.handleChange}
                />
                {formik.errors.cost ? <p> {formik.errors.cost} </p> : null}
              </div> 

              <div className="form-group">
                <label htmlFor="id" className="label_input">
                  Materiaux:
                </label>
                <select
                  id="material"
                  className="form-control"
                  placeholder="salaire"
                  value={formik.values.material}
                  onChange={formik.handleChange}
                >
                  {materials.map((material)=>(
                    <option value={material.idMaterial} label={material.name}>
                      {material.name}
                    </option>
                  ))}
                </select>
                {formik.errors.material ? <p> {formik.errors.material} </p> : null}
              </div>  
                


              <div className="form-group">
                <label htmlFor="id" className="label_input">
                Activité :
                </label>
                <select
                  id="shop"
                  className="form-control"
                  placeholder="salaire"
                  value={formik.values.shop}
                  onChange={formik.handleChange}
                >
                  {shops.map((shop)=>(
                    <option value={shop.idShop} label={shop.name}>
                      {shop.name}
                    </option>
                  ))}
                </select>
                {formik.errors.shop ? <p> {formik.errors.shop} </p> : null}
              </div>  
              
              <div className="form-group">
                <label htmlFor="id" className="label_input">
                  Emplacement du materiau:
                </label>
                <select
                  id="store"
                  className="form-control"
                  placeholder="salaire"
                  value={formik.values.store}
                  onChange={formik.handleChange}
                >
                  {stores.map((store)=>(
                    <option value={store.idStore} label={store.name}>
                      {store.name}
                    </option>
                  ))}
                </select>
                {formik.errors.store ? <p> {formik.errors.store} </p> : null}
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

export default FormulaireBuy;
