import { useLocation } from "react-router";
import { useAppContext } from "../../context/useAppContext";
import { FormItem } from "../../models/DtoStructures";
import { ItemProps } from "../../models/FunctionsProps";
import { getFormItemOfTypeFormulaire } from "../../utils/Utils";
import QuitToRootPath from "../buttons/QuitToRootPass";
import Container from "../Container";
import FImage from "../formItems/fimage/FImage";
import FList from "../formItems/flist/FList";
import FQuestion from "../formItems/fquestion/FQuestion";
import FText from "../formItems/ftext/FText";


const ViewType = ({ name }: Readonly<ItemProps>) => {
  switch (name) {
    case "ENTETE":
    case "COMPOSITION":
      return (<FText name={name} />);
    case "IMAGE_BANDEAU":
    case "LOCALISATION":
      return (<FImage name={name} />);
    case "E_MAIL":
    case "NOM_PRENOM":
      return (<FQuestion name={name} />);
    case "PANIER":
    case "CAGETTE":
    case "FORMULE":
      return (<FList name={name} />);
    default:
      return "foo";
  }
};

const Types = () => {
  const { state } = useAppContext();
  const location = useLocation();
  const name = location.state;

  const formItem = getFormItemOfTypeFormulaire<FormItem>(state.selectedTypeFormulaire, name);

  return (
    <Container title={`Modification de ${formItem.libelle}`}>
      <ViewType name={formItem.name} />
      <QuitToRootPath />
    </Container>
  );
};

export default Types;