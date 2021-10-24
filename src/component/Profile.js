import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)'
    },
    data: {
        color: '#9b9595',
        fontWeight: '400',
        marginLeft: '30px',
    },
    container4: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
    },
    linkContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    container5: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        marginBottom: '120px',
        '& span': {
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            '& a': {
                border: '1px solid #ddd',
                padding: '5px 10px',
                borderRadius: '3px',
                textAlign: 'center',
                margin: '0 auto',
                width: '120px',
                textDecoration: 'none',
            }
        }
    }
}));


const Profile = (props) => {
    const { profile } = props;
    console.log('complete',profile)
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>
            <div className={classes.container}>
                <div><h3>View Account Info</h3></div>
            </div>
            <div className={classes.container}>
                <div><h5>Last login: <span className={classes.data}>{
                    profile.login_details.last_login ?
                        <Moment format="DD/MM/YYYY">{profile.login_details.last_login}</Moment>
                    : 'N/A'
                    }</span></h5></div>
                <div><h5>No. of Login:
                    
                    <span className={classes.data}>{profile.login_details.number_of_login ? profile?.login_details?.number_of_login : 'N/A'}</span></h5></div>
            </div>
            <div className={classes.container}>
                <div><h3>Client Information</h3></div>
            </div>
            <div className={classes.container}>
                <div>
                    <h5>Account Type:</h5>
                    <h5>Shop Name:</h5>
                </div>
                <div>
                    <h5>CR:</h5>
                    <h5>VAT Number: <span className={classes.data}>{ profile.vat_number ? profile.vat_number : 'N/A'}</span></h5>
                </div>
                <div>
                    <img src={profile?.logo} style={{height: '80px',borderRadius: '100px'}} />
                </div>
            </div>
            {/* Contact Information */}
            <div className={classes.container}>
                <div><h3>Contact Information</h3></div>
            </div>
            <div className={classes.container}>
                <div>
                    <h5>Land Line: <span className={classes.data}>{ profile.landline ? profile.landline : 'N/A' }</span></h5>
                    <h5>Mobile Phone: <span className={classes.data}>{ profile.mobile ? profile.mobile : 'N/A'}</span></h5>
                </div>
                <div>
                    <h5>Email: <span className={classes.data}>{ profile.email ? profile.email : 'N/A'}</span></h5>
                    <h5>Website: <span className={classes.data}>{ profile.website ? profile.websie : 'N/A'}</span></h5>
                </div>
                
            </div>
            {/* National Address Section */}
            <div className={classes.container}>
                <div><h3>National Address</h3></div>
            </div>
            <div className={classes.container}>
                <div>
                    {/* Map here */}
                </div>
                <div>
                    <h5>Provenance:</h5>
                    <h5>City: <span className={classes.data}>{ profile.city ? profile.city.name : 'N/A'}</span></h5>
                    <h5>District: <span className={classes.data}>{ profile.district ? profile.district : 'N/A'}</span></h5>
                    <h5>Street: <span className={classes.data}>{ profile.street ? profile.street : 'N/A'}</span></h5>
                    <h5>Landmark:<span className={classes.data}>{ profile.landmark ? profile.landmark : 'N/A'}</span></h5>
                </div>
                <div>
                    <h5>Building Number: <span className={classes.data}>{ profile.building_number || 'N/A'}</span></h5>
                    <h5>Unit Number: <span className={classes.data}>{ profile.unit_number || 'N/A'}</span></h5>
                    <h5>Zip Code: <span className={classes.data}>{ profile.zipcode || 'N/A'}</span></h5>
                    <h5>Extended Zip Code: <span className={classes.data}>{ profile.extended_zipcode || 'N/A'}</span></h5>
                </div>

            </div>

            {/* Person Incharge Section */}
            <div className={classes.container}>
                <div><h3>Person In Charge</h3></div>
            </div>
            <div className={classes.container}>
                <div>
                    <h5>Title: <span className={classes.data}>{ profile.person_in_charge.title}</span></h5>
                    <h5>First Name: <span className={classes.data}>{profile.person_in_charge.first_name || 'N/A'}</span></h5>
                </div>
                <div>
                    <h5>Last Name: <span className={classes.data}>{profile.person_in_charge.last_name || 'N/A'}</span></h5>
                    <h5>Email: <span className={classes.data}>{profile.person_in_charge.email || 'N/A'}</span></h5>
                   
                </div>
                <div>
                    <h5>Phone: <span className={classes.data}>{profile.person_in_charge.phone || 'N/A'}</span></h5>
                </div>

            </div>

            {/* Bank Information */}
            <div className={classes.container}>
                <div><h3>Bank Information</h3></div>
            </div>
            <div className={classes.container}>
                <div>
                    <h5>Bank Name: <span className={classes.data}>{ profile.bank ? profile.bank.name : 'N/A' }</span></h5>
                    <h5>Bank Swift Code: <span className={classes.data}>{profile.bank ? profile.bank.swift_code : 'N/A'}</span></h5>
                </div>
                <div>
                    <h5>Account Holder Name: <span className={classes.data}>{ profile.bank_account_name || 'N/A'}</span></h5>
                    <h5>Bank Account Number: <span className={classes.data}>{ profile.bank_account_number || 'N/A'}</span></h5>
                   
                </div>
                <div>
                    <h5>IBAN: <span className={classes.data}>{ profile.bank_iban || 'N/A'}</span></h5>
                </div>

            </div>

            {/* Required Documents */}
            <div className={classes.container}>
                <div><h3>Required Documents</h3></div>
            </div>
            <div className={classes.container4}>
                    <div>
                    <h5>CR Certificate</h5>
                    <div className={classes.linkContainer}>
                        {profile.documents.cr_certificate ? <a href={profile.documents.cr_certificate ? profile.documents.cr_certificate.url : ''}>View</a> : <span style={{marginLeft: '0'}} className={classes.data}>N/A</span>}
                        {profile.documents.cr_certificate ? <a href={profile.documents.cr_certificate ? profile.documents.cr_certificate.url : ''}>Download</a> : <span className={classes.data}>N/A</span>}
                    </div>
                   
                    </div>
                    <div>
                    <h5>VAT Certificate</h5>
                    <div className={classes.linkContainer}>
                        {profile.documents.vat_certificate ? <a href={profile.documents.vat_certificate ? profile.documents.vat_certificate.url : ''}>View</a> : <span style={{marginLeft: '0'}} className={classes.data}>N/A</span>}
                        {profile.documents.vat_certificate ? <a href={profile.documents.vat_certificate ? profile.documents.vat_certificate.url : ''}>Download</a> : <span className={classes.data}>N/A</span>}
                    </div>
                   
                    </div>
                    <div>
                    <h5>Zakat Certificate</h5>
                    <div className={classes.linkContainer}>
                        {profile.documents.zakat_certificate ? <a href={profile.documents.zakat_certificate ? profile.documents.zakat_certificate.url : ''}>View</a> : <span style={{marginLeft: '0'}} className={classes.data}>N/A</span>}
                        {profile.documents.zakat_certificate ? <a href={profile.documents.zakat_certificate ? profile.documents.zakat_certificate.url : ''}>Download</a> : <span className={classes.data}>N/A</span>}
                    </div>
                   
                    </div>
                    <div>
                    <h5>National Address Proof</h5>
                    <div className={classes.linkContainer}>
                        {profile.documents.national_address_proof ? <a href={profile.documents.national_address_proof ? profile.documents.national_address_proof.url : ''}>View</a> : <span style={{marginLeft: '0'}} className={classes.data}>N/A</span>}
                        {profile.documents.national_address_proof ? <a href={profile.documents.national_address_proof ? profile.documents.national_address_proof.url : ''}>Download</a> : <span className={classes.data}>N/A</span>}
                    </div>
                   
                    </div>
            </div>

            {/* Brands Section */}
            <div className={classes.container}>
                <div><h3>Support Brands</h3></div>
            </div>
            <div className={classes.container}>
                {profile.brands.length ? <div>
                    <h5>Korean Vehicles: {profile.brands.filter(manufactureName => manufactureName.manufacture.name === `Korean`).map((item) =>
                        <span key={item.id} className={classes.data}>{ item?.name}</span>
                    ) }</h5>
                    <h5>European Vehicles: {profile.brands.filter(manufactureName => manufactureName.manufacture.name === `European`).map((item) =>
                        <span key={item.id} className={classes.data}>{ item?.name}</span>
                    ) }</h5>
                    <h5>Japanese Vehicles: {profile.brands.filter(manufactureName => manufactureName.manufacture.name === `Japanese`).map((item) =>
                        <span key={item.id} className={classes.data}>{ item?.name}</span>
                    ) }</h5>
                </div> : 'N/A'}
            </div>

            {/* Delivery Area */}
            <div className={classes.container}>
                <div><h3>Delivery Area Coverage</h3></div>
            </div>
            <div className={classes.container}>
                <div>
                    <h5>Eastern Provenance: {profile.delivery_areas.map((delivery) => 
                        <span key={delivery.id} className={classes.data}>{ delivery.name}</span>
                    ) }</h5>
                </div>
            </div>

            {/* Action Section */}
            <div className={classes.container5}>
                <span>
                    <a href='/'>Modify</a>
                </span>
                <span>
                    <a href='/'>Approve</a>
                </span>
                <span>
                    <a href='/'>Reject</a>
                </span>
                <span>
                    <a href='/'>Close Account</a>
                </span>
                <span>
                    <a href='/'>Cancel</a>
                </span>
            </div>
        </div>
    );
};

export default Profile;