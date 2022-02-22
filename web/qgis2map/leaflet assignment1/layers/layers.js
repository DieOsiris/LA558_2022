var wms_layers = [];

var format_States_0 = new ol.format.GeoJSON();
var features_States_0 = format_States_0.readFeatures(json_States_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_States_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_States_0.addFeatures(features_States_0);
var lyr_States_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_States_0, 
                style: style_States_0,
                interactive: true,
                title: '<img src="styles/legend/States_0.png" /> States'
            });
var format_ParticipatedStates_1 = new ol.format.GeoJSON();
var features_ParticipatedStates_1 = format_ParticipatedStates_1.readFeatures(json_ParticipatedStates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParticipatedStates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParticipatedStates_1.addFeatures(features_ParticipatedStates_1);
var lyr_ParticipatedStates_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParticipatedStates_1, 
                style: style_ParticipatedStates_1,
                interactive: true,
                title: '<img src="styles/legend/ParticipatedStates_1.png" /> Participated States'
            });
var format_InterstateHighway_2 = new ol.format.GeoJSON();
var features_InterstateHighway_2 = format_InterstateHighway_2.readFeatures(json_InterstateHighway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterstateHighway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterstateHighway_2.addFeatures(features_InterstateHighway_2);
var lyr_InterstateHighway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InterstateHighway_2, 
                style: style_InterstateHighway_2,
                interactive: true,
                title: '<img src="styles/legend/InterstateHighway_2.png" /> Interstate Highway '
            });
var format_TruckParkingLocations_3 = new ol.format.GeoJSON();
var features_TruckParkingLocations_3 = format_TruckParkingLocations_3.readFeatures(json_TruckParkingLocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TruckParkingLocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TruckParkingLocations_3.addFeatures(features_TruckParkingLocations_3);
var lyr_TruckParkingLocations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TruckParkingLocations_3, 
                style: style_TruckParkingLocations_3,
                interactive: true,
                title: '<img src="styles/legend/TruckParkingLocations_3.png" /> Truck Parking Locations'
            });

lyr_States_0.setVisible(true);lyr_ParticipatedStates_1.setVisible(true);lyr_InterstateHighway_2.setVisible(true);lyr_TruckParkingLocations_3.setVisible(true);
var layersList = [lyr_States_0,lyr_ParticipatedStates_1,lyr_InterstateHighway_2,lyr_TruckParkingLocations_3];
lyr_States_0.set('fieldAliases', {'AREA': 'AREA', 'STATE_NAME': 'STATE_NAME', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', 'POP2000': 'POP2000', 'POP2001': 'POP2001', 'POP00_SQMI': 'POP00_SQMI', 'WHITE': 'WHITE', 'BLACK': 'BLACK', 'AMERI_ES': 'AMERI_ES', 'ASIAN': 'ASIAN', 'HAWN_PI': 'HAWN_PI', 'OTHER': 'OTHER', 'MULT_RACE': 'MULT_RACE', 'HISPANIC': 'HISPANIC', 'MALES': 'MALES', 'FEMALES': 'FEMALES', 'AGE_UNDER5': 'AGE_UNDER5', 'AGE_5_17': 'AGE_5_17', 'AGE_18_21': 'AGE_18_21', 'AGE_22_29': 'AGE_22_29', 'AGE_30_39': 'AGE_30_39', 'AGE_40_49': 'AGE_40_49', 'AGE_50_64': 'AGE_50_64', 'AGE_65_UP': 'AGE_65_UP', 'MED_AGE': 'MED_AGE', 'MED_AGE_M': 'MED_AGE_M', 'MED_AGE_F': 'MED_AGE_F', 'HOUSEHOLDS': 'HOUSEHOLDS', 'AVE_HH_SZ': 'AVE_HH_SZ', 'HSEHLD_1_M': 'HSEHLD_1_M', 'HSEHLD_1_F': 'HSEHLD_1_F', 'MARHH_CHD': 'MARHH_CHD', 'MARHH_NO_C': 'MARHH_NO_C', 'MHH_CHILD': 'MHH_CHILD', 'FHH_CHILD': 'FHH_CHILD', 'FAMILIES': 'FAMILIES', 'AVE_FAM_SZ': 'AVE_FAM_SZ', 'HSE_UNITS': 'HSE_UNITS', 'VACANT': 'VACANT', 'OWNER_OCC': 'OWNER_OCC', 'RENTER_OCC': 'RENTER_OCC', 'NO_FARMS97': 'NO_FARMS97', 'AVG_SIZE97': 'AVG_SIZE97', 'CROP_ACR97': 'CROP_ACR97', 'AVG_SALE97': 'AVG_SALE97', });
lyr_ParticipatedStates_1.set('fieldAliases', {'AREA': 'AREA', 'STATE_NAME': 'STATE_NAME', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', 'POP2000': 'POP2000', 'POP2001': 'POP2001', 'POP00_SQMI': 'POP00_SQMI', 'WHITE': 'WHITE', 'BLACK': 'BLACK', 'AMERI_ES': 'AMERI_ES', 'ASIAN': 'ASIAN', 'HAWN_PI': 'HAWN_PI', 'OTHER': 'OTHER', 'MULT_RACE': 'MULT_RACE', 'HISPANIC': 'HISPANIC', 'MALES': 'MALES', 'FEMALES': 'FEMALES', 'AGE_UNDER5': 'AGE_UNDER5', 'AGE_5_17': 'AGE_5_17', 'AGE_18_21': 'AGE_18_21', 'AGE_22_29': 'AGE_22_29', 'AGE_30_39': 'AGE_30_39', 'AGE_40_49': 'AGE_40_49', 'AGE_50_64': 'AGE_50_64', 'AGE_65_UP': 'AGE_65_UP', 'MED_AGE': 'MED_AGE', 'MED_AGE_M': 'MED_AGE_M', 'MED_AGE_F': 'MED_AGE_F', 'HOUSEHOLDS': 'HOUSEHOLDS', 'AVE_HH_SZ': 'AVE_HH_SZ', 'HSEHLD_1_M': 'HSEHLD_1_M', 'HSEHLD_1_F': 'HSEHLD_1_F', 'MARHH_CHD': 'MARHH_CHD', 'MARHH_NO_C': 'MARHH_NO_C', 'MHH_CHILD': 'MHH_CHILD', 'FHH_CHILD': 'FHH_CHILD', 'FAMILIES': 'FAMILIES', 'AVE_FAM_SZ': 'AVE_FAM_SZ', 'HSE_UNITS': 'HSE_UNITS', 'VACANT': 'VACANT', 'OWNER_OCC': 'OWNER_OCC', 'RENTER_OCC': 'RENTER_OCC', 'NO_FARMS97': 'NO_FARMS97', 'AVG_SIZE97': 'AVG_SIZE97', 'CROP_ACR97': 'CROP_ACR97', 'AVG_SALE97': 'AVG_SALE97', });
lyr_InterstateHighway_2.set('fieldAliases', {'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', });
lyr_TruckParkingLocations_3.set('fieldAliases', {'SITE_ID': 'SITE_ID', 'EFFECTIVE_DATE': 'EFFECTIVE_DATE', 'MILE_MARKER': 'MILE_MARKER', 'EXIT_NUMBER': 'EXIT_NUMBER', 'STREET_ADDRESS': 'STREET_ADDRESS', 'STATE': 'STATE', 'NAME': 'NAME', 'CITY': 'CITY', 'LATITUDE': 'LATITUDE', 'LONGTITUDE': 'LONGTITUDE', 'OWNERSHIP': 'OWNERSHIP', 'DIRECTION_OF_TRAVEL': 'DIRECTION_OF_TRAVEL', 'RELEVANT_HIGHWAY': 'RELEVANT_HIGHWAY', 'AMENITY': 'AMENITY', 'CAPACITY': 'CAPACITY', 'ZIPCODE': 'ZIPCODE', 'TIMEZONE': 'TIMEZONE', });
lyr_States_0.set('fieldImages', {'AREA': 'TextEdit', 'STATE_NAME': 'TextEdit', 'STATE_FIPS': 'TextEdit', 'SUB_REGION': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'POP2000': 'Range', 'POP2001': 'TextEdit', 'POP00_SQMI': 'Range', 'WHITE': 'Range', 'BLACK': 'Range', 'AMERI_ES': 'Range', 'ASIAN': 'Range', 'HAWN_PI': 'Range', 'OTHER': 'Range', 'MULT_RACE': 'Range', 'HISPANIC': 'Range', 'MALES': 'Range', 'FEMALES': 'Range', 'AGE_UNDER5': 'Range', 'AGE_5_17': 'Range', 'AGE_18_21': 'Range', 'AGE_22_29': 'Range', 'AGE_30_39': 'Range', 'AGE_40_49': 'Range', 'AGE_50_64': 'Range', 'AGE_65_UP': 'Range', 'MED_AGE': 'TextEdit', 'MED_AGE_M': 'TextEdit', 'MED_AGE_F': 'TextEdit', 'HOUSEHOLDS': 'Range', 'AVE_HH_SZ': 'TextEdit', 'HSEHLD_1_M': 'Range', 'HSEHLD_1_F': 'Range', 'MARHH_CHD': 'Range', 'MARHH_NO_C': 'Range', 'MHH_CHILD': 'Range', 'FHH_CHILD': 'Range', 'FAMILIES': 'Range', 'AVE_FAM_SZ': 'TextEdit', 'HSE_UNITS': 'Range', 'VACANT': 'Range', 'OWNER_OCC': 'Range', 'RENTER_OCC': 'Range', 'NO_FARMS97': 'TextEdit', 'AVG_SIZE97': 'TextEdit', 'CROP_ACR97': 'TextEdit', 'AVG_SALE97': 'TextEdit', });
lyr_ParticipatedStates_1.set('fieldImages', {'AREA': 'TextEdit', 'STATE_NAME': 'TextEdit', 'STATE_FIPS': 'TextEdit', 'SUB_REGION': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'POP2000': 'Range', 'POP2001': 'TextEdit', 'POP00_SQMI': 'Range', 'WHITE': 'Range', 'BLACK': 'Range', 'AMERI_ES': 'Range', 'ASIAN': 'Range', 'HAWN_PI': 'Range', 'OTHER': 'Range', 'MULT_RACE': 'Range', 'HISPANIC': 'Range', 'MALES': 'Range', 'FEMALES': 'Range', 'AGE_UNDER5': 'Range', 'AGE_5_17': 'Range', 'AGE_18_21': 'Range', 'AGE_22_29': 'Range', 'AGE_30_39': 'Range', 'AGE_40_49': 'Range', 'AGE_50_64': 'Range', 'AGE_65_UP': 'Range', 'MED_AGE': 'TextEdit', 'MED_AGE_M': 'TextEdit', 'MED_AGE_F': 'TextEdit', 'HOUSEHOLDS': 'Range', 'AVE_HH_SZ': 'TextEdit', 'HSEHLD_1_M': 'Range', 'HSEHLD_1_F': 'Range', 'MARHH_CHD': 'Range', 'MARHH_NO_C': 'Range', 'MHH_CHILD': 'Range', 'FHH_CHILD': 'Range', 'FAMILIES': 'Range', 'AVE_FAM_SZ': 'TextEdit', 'HSE_UNITS': 'Range', 'VACANT': 'Range', 'OWNER_OCC': 'Range', 'RENTER_OCC': 'Range', 'NO_FARMS97': 'TextEdit', 'AVG_SIZE97': 'TextEdit', 'CROP_ACR97': 'TextEdit', 'AVG_SALE97': 'TextEdit', });
lyr_InterstateHighway_2.set('fieldImages', {'LINEARID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RTTYP': 'TextEdit', 'MTFCC': 'TextEdit', });
lyr_TruckParkingLocations_3.set('fieldImages', {'SITE_ID': 'TextEdit', 'EFFECTIVE_DATE': 'DateTime', 'MILE_MARKER': 'TextEdit', 'EXIT_NUMBER': 'TextEdit', 'STREET_ADDRESS': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGTITUDE': 'TextEdit', 'OWNERSHIP': 'TextEdit', 'DIRECTION_OF_TRAVEL': 'TextEdit', 'RELEVANT_HIGHWAY': 'TextEdit', 'AMENITY': 'TextEdit', 'CAPACITY': 'Range', 'ZIPCODE': 'Range', 'TIMEZONE': 'TextEdit', });
lyr_States_0.set('fieldLabels', {'AREA': 'no label', 'STATE_NAME': 'no label', 'STATE_FIPS': 'no label', 'SUB_REGION': 'no label', 'STATE_ABBR': 'no label', 'POP2000': 'no label', 'POP2001': 'no label', 'POP00_SQMI': 'no label', 'WHITE': 'no label', 'BLACK': 'no label', 'AMERI_ES': 'no label', 'ASIAN': 'no label', 'HAWN_PI': 'no label', 'OTHER': 'no label', 'MULT_RACE': 'no label', 'HISPANIC': 'no label', 'MALES': 'no label', 'FEMALES': 'no label', 'AGE_UNDER5': 'no label', 'AGE_5_17': 'no label', 'AGE_18_21': 'no label', 'AGE_22_29': 'no label', 'AGE_30_39': 'no label', 'AGE_40_49': 'no label', 'AGE_50_64': 'no label', 'AGE_65_UP': 'no label', 'MED_AGE': 'no label', 'MED_AGE_M': 'no label', 'MED_AGE_F': 'no label', 'HOUSEHOLDS': 'no label', 'AVE_HH_SZ': 'no label', 'HSEHLD_1_M': 'no label', 'HSEHLD_1_F': 'no label', 'MARHH_CHD': 'no label', 'MARHH_NO_C': 'no label', 'MHH_CHILD': 'no label', 'FHH_CHILD': 'no label', 'FAMILIES': 'no label', 'AVE_FAM_SZ': 'no label', 'HSE_UNITS': 'no label', 'VACANT': 'no label', 'OWNER_OCC': 'no label', 'RENTER_OCC': 'no label', 'NO_FARMS97': 'no label', 'AVG_SIZE97': 'no label', 'CROP_ACR97': 'no label', 'AVG_SALE97': 'no label', });
lyr_ParticipatedStates_1.set('fieldLabels', {'AREA': 'no label', 'STATE_NAME': 'no label', 'STATE_FIPS': 'no label', 'SUB_REGION': 'no label', 'STATE_ABBR': 'no label', 'POP2000': 'no label', 'POP2001': 'no label', 'POP00_SQMI': 'no label', 'WHITE': 'no label', 'BLACK': 'no label', 'AMERI_ES': 'no label', 'ASIAN': 'no label', 'HAWN_PI': 'no label', 'OTHER': 'no label', 'MULT_RACE': 'no label', 'HISPANIC': 'no label', 'MALES': 'no label', 'FEMALES': 'no label', 'AGE_UNDER5': 'no label', 'AGE_5_17': 'no label', 'AGE_18_21': 'no label', 'AGE_22_29': 'no label', 'AGE_30_39': 'no label', 'AGE_40_49': 'no label', 'AGE_50_64': 'no label', 'AGE_65_UP': 'no label', 'MED_AGE': 'no label', 'MED_AGE_M': 'no label', 'MED_AGE_F': 'no label', 'HOUSEHOLDS': 'no label', 'AVE_HH_SZ': 'no label', 'HSEHLD_1_M': 'no label', 'HSEHLD_1_F': 'no label', 'MARHH_CHD': 'no label', 'MARHH_NO_C': 'no label', 'MHH_CHILD': 'no label', 'FHH_CHILD': 'no label', 'FAMILIES': 'no label', 'AVE_FAM_SZ': 'no label', 'HSE_UNITS': 'no label', 'VACANT': 'no label', 'OWNER_OCC': 'no label', 'RENTER_OCC': 'no label', 'NO_FARMS97': 'no label', 'AVG_SIZE97': 'no label', 'CROP_ACR97': 'no label', 'AVG_SALE97': 'no label', });
lyr_InterstateHighway_2.set('fieldLabels', {'LINEARID': 'no label', 'FULLNAME': 'no label', 'RTTYP': 'no label', 'MTFCC': 'no label', });
lyr_TruckParkingLocations_3.set('fieldLabels', {'SITE_ID': 'no label', 'EFFECTIVE_DATE': 'no label', 'MILE_MARKER': 'no label', 'EXIT_NUMBER': 'no label', 'STREET_ADDRESS': 'no label', 'STATE': 'no label', 'NAME': 'header label', 'CITY': 'no label', 'LATITUDE': 'no label', 'LONGTITUDE': 'no label', 'OWNERSHIP': 'no label', 'DIRECTION_OF_TRAVEL': 'no label', 'RELEVANT_HIGHWAY': 'no label', 'AMENITY': 'no label', 'CAPACITY': 'no label', 'ZIPCODE': 'no label', 'TIMEZONE': 'no label', });
lyr_TruckParkingLocations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});