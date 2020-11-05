import React from 'react'
import { FlatList,  View } from 'react-native'

import {first} from '../Styles'
import RestaurantItem from '../components/RestaurantItem'


const Restaurants = [
    {
        id : 0,
        'name' : 'Istanbul Restaurant',
        color : '#bfbfbf' ,
        desc : 'Lokanta veya restoran, ücret karşılığında müşterilere yemek ve içecek hazırlanıp servis edilen yer. Çoğunlukla büyük bir yemek salonu ve mutfaktan meydana gelir. Lokantalar çoğunlukla özel mülktür. ... Bazı lokantalar sundukları yöresel mutfaklarla, bazıları da servis anlayışlarıyla farklılık yaratırlar.',
        city : 'İstanbul',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 1,
        name : 'Landhaus Heitmann',
        color : null ,
        desc : 'Die Speisen sind sehr lecker und ausreichend. Der Rotwein ist super, das Personal immer freundlich. Im Sommer kann man draußen essen und trinken, fast so wie im Süden.Wir sind viele Jahre Gast in dem griechischen Restaurant in Herzebrock. Ich kenne keinen besseren "Griechen"..',
        city : 'Dortmund',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 2,
        name : 'manos-grillhouse',
        color : '#c880ff' ,
        desc : 'In Zeiten der Massentierhaltung und Convenience Food ist es wichtig mit Produkten aus der Region zu arbeiten und sich seiner Linie treu zubleiben. Wir arbeiten seit der Eröffnung im Jahr 2011 ausschließlich mit frischen Produkten und ohne Geschmacksverstärkern – darauf sind wir stolz.',
        city : 'Madrid',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 3,
        name : 'Café & Restaurant Emshaus',
        color : '#80ffff' ,
        desc : 'Aufgrund der Empfehlung in meiner Frauengruppe suchten und besuchten wir diesen Griechen. Die Parkplatz Suche war etwas schwieriger, denn die Gaststätte liegt wunderbar versteckt. direkt an der Kirche. Dadurch kann man draußen hervorragend sitzen, sehr ruhig und unglaublich grün. Eine Reservierung ist draußen nicht nötig..',
        city : 'Berlin',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 4,
        name : 'Piccalo Restaurant',
        color : '#ffd280' ,
        desc : 'Was Unsere Produkte betrifft, wie Pizzateig und So�en, werden alle nach einem Familienrezept hergestellt. Wir k�nnen behaupten, das die Pizza und Nudeln mit Sorgfalt und liebe zum Handwerk der Pizzazubereitung und einer au�erordentlichen Qualit�t hergestellt werden.',
        city : 'Paris',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 5,
        name : 'Café Großkopff',
        color : '',
        desc : 'stacktrace Großkopff in Herzebrock kann man sich entspannt bei köstlichen Kaffee und Kuchenspezialitäten zurücklehnen. Frische, unglaublich gute Kuchen und Torten nach altem Hausrezept und den, meiner Meinung nach, besten Filterkaffee in ganz Herzebrock. Dazu das einmalige Ambiente und die stets gut gelaunten Mitarbeiter...was will.',
        city : 'Athens',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 6,
        name : 'Gastwirtschaft Ferdinand Reuter',
        color : '#008080' ,
        desc : 'Das bestellte "Ferdinand" Menü des Tages war hervorragend. Ein kleines Mango war, dass die Gänge in zu kurzen Abständen serviert wurden         und das bestellte Glas Wein nicht aus der Flasche am Tisch eingeschenkt wurde.        Dies macht letztendlich die Vollendung in diesem ansonsten tollen Lokal aus !',
        city : 'Dortmund',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 7,
        name : 'Landhaus Heitmann',
        color : '#ff8080' ,
        desc : 'Es stehen noch nicht genügend Bewertungen zu Essen, Service, Preis-Leistungs-Verhältnis und Atmosphäre für Landhaus Heitmann, Deutschland zur Verfügung. Schreiben Sie eine der ersten Bewertungen!',
        city : 'Wien',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 8,
        name : 'Brocker Muhle',
        color : '#bbdefb' ,
        desc : 'Die Brocker Mühle nennt sich Restaurant ist aber nach meinem Empfinden mehr ein „Landgasthaus“ vor den Toren von Gütersloh in Herzebrock-Clarholz. Mit 14 Tischen und etwa 70 Plätzen ist es nicht zu groß und strahlt eine Gemütlichkeit und Ruhe aus. An einem Samstagabend zum Monatsende',
        city : 'Frankfurt',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 9,
        name : 'Abrahams Restaurant',
        color : '#f8bbd0' ,
        desc : 'Endlich wieder raus, endlich wieder auswärts Essen dürfen. Unter hohen hygienischen Verpflichtungen und Abstandsregeln, aber die sind schnell verdrängt, denn wenn man so nett und freudig willkommen geheißen wird, wie im Abrahams, dann spielt such der Mundschutz keine Rolle mehr. Dieser wird auch von der.',
        city : 'Koln',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 10,
        name : 'Peppe,s Pizza Express',
        color : '#d7ccc8' ,
        desc : 'Halb Imbiss, halb Pizzeria. Bruschetta und die Pizzen waren spitzenmäßig, die Apfelschorle schal, letztere wurde aber anstandslos ausgetauscht. Alles sehr sauber und gepflegt. Ich denke die Betreiber hätten in anderer Lage auch das Zeug zum Edelitaliener, so bekommen wir aber bestes Futter zum moderaten Preis.',
        city : 'München',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 11,
        name : 'La Trattoria',
        color : '#ffb74d' ,
        desc : 'Aufgrund mehrerer Empfehlungen habe ich La Trattoria heute Abend mit einer Freundin besucht. Sofort waren wir von dem Ambiente geflasht: Angenehmes Licht, schön italienisch eingerichtet. Die Corona-Abstände wurden clever eingehalten. Auch die Kellner waren auffallend freundlich und zuvorkommend. Die Karte ist sehr vielfältig, hier',
        city : 'Milano',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 12,
        name : 'Imbiss Heinermann',
        color : '#ffff8d' ,
        desc : 'Mehr als 20 Jahren haben wir hier immer gerne gegessen oder am Drive In Schalter das Essen abgeholt. Die Qualität nimmt leider stetig ab, und die Portionen werden kleiner, wobei es hier oft auf die Bedienung ankommt. Bei einer Angestellten tragen die langen künstlichen Fingernägel...',
        city : 'Prag',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 13,
        name : 'Haus Zelic',
        color : '#ff3d00' ,
        desc : 'Qualitativ und quantitativ hochwertiges Essen, große Weinauswahl, Salatbuffet. Ansprechendes Ambiente. Sehr guter Service. Freundliche Mitarbeiter. Großer Parkplatz. Größere Gesellschaften werden schnell und kompetent bedient. Im Sommer draußen unter großen schützenden Segeln. Raucherbereich..',
        city : 'Roma',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 14,
        name : 'Kevekordes',
        color : '#69f0ae' ,
        desc : 'Hier kann man einfach gut und bodenständig essen! Gehobene, gutbürgerliche Küche. Aber auch Mediterran und Fisch wird sehr gut zubereitet. Das Interieur ist nicht sonderlich "hip" aber passt.',
        city : 'Moskow',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 15,
        name : 'Flotis İzmir',
        color : 'cyan' ,
        desc : 'Hier kann man einfach gut und bodenständig essen! Gehobene, gutbürgerliche Küche. Aber auch Mediterran und Fisch wird sehr gut zubereitet. Das Interieur ist nicht sonderlich "hip" aber passt.',
        city : 'İzmir',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 16,
        name : 'Aspendos',
        color : 'yellow' ,
        desc : 'Hier kann man einfach gut und bodenständig essen! Gehobene, gutbürgerliche Küche. Aber auch Mediterran und Fisch wird sehr gut zubereitet. Das Interieur ist nicht sonderlich "hip" aber passt.',
        city : 'Luxemburg',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
    {
        id : 17,
        name : 'Wiesbaden Cafe',
        color : 'azure' ,
        desc : 'Hier kann man einfach gut und bodenständig essen! Gehobene, gutbürgerliche Küche. Aber auch Mediterran und Fisch wird sehr gut zubereitet. Das Interieur ist nicht sonderlich "hip" aber passt.',
        city : 'Wiesbaden',
        adress : 'Clarholzer Str. 43, 33442 Herzebrock',
        phone : +491234564578
    },
]

const First = (props) => {

    const onPressData = () => props.navigation.navigate('SecondPage' ,
    
    {name : 'Talha' })

    const renderData = (data) => <RestaurantItem onData={onPressData} food={data.item}  />
    
    return (
        <View style={first.container}>
            <FlatList 
                keyExtractor ={(item, index) => item.id.toString()}
                data = {Restaurants}
                renderItem ={renderData}
            />
        </View>
    )
}

export {First}

// id : 0,
// name : 'Istanbul Restaurant',
// color : '#bfbfbf' ,
// desc : 'Lokanta veya restoran, ücret karşılığında müşterilere yemek ve içecek hazırlanıp servis edilen yer. Çoğunlukla büyük bir yemek salonu ve mutfaktan meydana gelir. Lokantalar çoğunlukla özel mülktür. ... Bazı lokantalar sundukları yöresel mutfaklarla, bazıları da servis anlayışlarıyla farklılık yaratırlar.',
// city : 'İstanbul',
// adress : 'Clarholzer Str. 43, 33442 Herzebrock',
// image : "{uri : 'https://img-s1.onedio.com/id-5408b30fac0ca4566295910c/rev-0/w-900/h-690/f-jpg/s-231182628be3f13c0e6b4665bdad9ce38ad2afbb.jpg'}",
// phone : +491234564578