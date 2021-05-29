import styles from './TitleForm.module.scss'
import Input from "../../../ui/input/Input";
import TextArea from "../../../ui/text_area/TextArea";
import Button from "../../../ui/button/Button";
import AddQuizLogic from "../AddQuizLogic";

const TitleForm = () => {
    const {setData, onSaveTitleHandler} = AddQuizLogic();
    return (
        <div className={styles.title_content_wrapper}>
            <Input
                handler={setData}
                label={'Tytuł'}
                type={'Tytuł'}
                name={'title'}
                placeholder={'Tytuł'}/>
            <Input
                handler={setData}
                label={'Czas na rozwiązanie'}
                type={'time'}
                name={'time'}
                placeholder={'Czas na rozwiązanie'}/>
            <TextArea
                handler={setData}
                label={`Opis quizu `}
                name={`description`}
                placeholder={`Opis quizu `}
                initialText={""}
            />
            <Button onClick={onSaveTitleHandler}>Zapisz i dodaj pytania</Button>
        </div>
    )
}
export default TitleForm;