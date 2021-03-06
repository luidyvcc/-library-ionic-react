import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import AuthorListContextual from '../../components/AuthorListContextual';

const AuthorListPage: React.FC = () =>
    <IonPage id="author-list">
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Autores</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            <AuthorListContextual />
        </IonContent>
    </IonPage>

export default AuthorListPage
