import './App.css';
import AutoGrid from './component/Grid';
import CustomizedInputBase from './component/SearchBar';
import Container from '@material-ui/core/Container';
import Profile from './component/Profile'


function App() {
  const completeProfile = {
    "message": "Company details",
    "data": {
      "id": 28,
      "name": "North End",
      "registration_number": "1212121212",
      "vat_number": "121212121212121",
      "logo": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/company_logos\/1634993744.png",
      "logo_xlarge": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/company_logos\/1634993744_300.png",
      "logo_large": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/company_logos\/1634993744_150.png",
      "logo_medium": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/company_logos\/1634993744_50.png",
      "logo_small": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/company_logos\/1634993744_32.png",
      "country_id": 191,
      "country": {
        "id": 191,
        "name": "Saudi Arabia",
        "states": []
      },
      "state_id": null,
      "state": null,
      "city_id": 4121,
      "city": {
        "id": 4121,
        "name": "Pernambut"
      },
      "zipcode": null,
      "extended_zipcode": null,
      "district": null,
      "landmark": null,
      "street": null,
      "building_number": null,
      "unit_number": null,
      "address_line1": null,
      "address_line2": null,
      "landline": null,
      "mobile": "+8801680553931",
      "email": "rajbp02@gmail.com",
      "website": null,
      "bank_id": 8,
      "bank": {
        "id": 8,
        "swift_code": "SIBCSARI",
        "name": "SAUDI INVESTMENT BANK"
      },
      "bank_account_name": "Tanvir Raj",
      "bank_iban": "121212121212121212121212",
      "bank_account_number": "11",
      "type": 2,
      "documents": {
        "cr_certificate": {
          "id": 299,
          "name": "CR Certificate",
          "url": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/register_documents\/gUWRgq1LaT46OnsJON5xMrdwXcMyePmwxrjySYf0.pdf"
        },
        "vat_certificate": {
          "id": 300,
          "name": "VAT Certificate",
          "url": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/register_documents\/ReJnoampNvk56WZEsIlj39Tsq9hD84bLXQVYejHh.pdf"
        },
        "zakat_certificate": {
          "id": 301,
          "name": "Zakat Certificate",
          "url": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/register_documents\/ddAD4W4OabnnlGohrfr9RSUhWujYGJYUUiaOfsq1.pdf"
        },
        "signed_agreement": null,
        "national_address_proof": {
          "id": 302,
          "name": "National Address Proof",
          "url": "https:\/\/static-stg-yiqv.s3.me-south-1.amazonaws.com\/register_documents\/qT613ylSyqnXr58nrgH4LmuCAJk91CuYrtolkbQN.pdf"
        }
      },
      "is_approved": false,
      "is_rejected": false,
      "is_pending": true,
      "is_incomplete": false,
      "approval_notes": null,
      "registered_at": "2021-09-23T07:51:54.000000Z",
      "brands": [
        {
          "id": 36,
          "name": "Bentley",
          "manufacture_id": 3,
          "manufacture": {
            "id": 3,
            "name": "European",
            "brands": []
          }
        },
        {
          "id": 37,
          "name": "BMW",
          "manufacture_id": 3,
          "manufacture": {
            "id": 3,
            "name": "European",
            "brands": []
          }
        },
        {
          "id": 73,
          "name": "Lexus",
          "manufacture_id": 4,
          "manufacture": {
            "id": 4,
            "name": "Japanese",
            "brands": []
          }
        },
        {
          "id": 84,
          "name": "Hyundai",
          "manufacture_id": 5,
          "manufacture": {
            "id": 5,
            "name": "Korean",
            "brands": []
          }
        },
        {
          "id": 85,
          "name": "KIA",
          "manufacture_id": 5,
          "manufacture": {
            "id": 5,
            "name": "Korean",
            "brands": []
          }
        }
      ],
      "delivery_areas": [
        {
          "id": 48318,
          "name": "Al Jubail"
        },
        {
          "id": 48317,
          "name": "Hafar Al Batin"
        }
      ],
      "person_in_charge": {
        "first_name": "Tanvir",
        "last_name": "Raj",
        "title": "Tanvir",
        "phone": "+8801680553931",
        "email": "rajbp02@gmail.com"
      },
      "settings": {
        "auto_approve_rfqs": true,
        "show_company_name": true,
        "is_credit_limit_active": false,
        "credit_limit": "1000.00",
        "pay_term": 100,
        "is_delivery_supported": true,
        "has_bidding_platform_access": true,
        "bidding_platform_sparehub_commission": "0.00",
        "has_erp_platform_access": true,
        "erp_platform_sparehub_commission": "0.00",
        "has_marketplace_platform_access": true,
        "marketplace_platform_sparehub_commission": "0.00",
        "has_workshops_platform_access": true,
        "workshops_platform_sparehub_commission": "0.00",
        "has_ecommerce_platform_access": true,
        "ecommerce_platform_sparehub_commission": "0.00"
      },
      "company_admin": {
        "id": 28,
        "full_name": "Tanvir ",
        "first_name": "Tanvir",
        "last_name": "",
        "title": null,
        "phone": "",
        "email": "rajbp02@gmail.com",
        "username": "",
        "profile_image": null,
        "profile_image_xlarge": null,
        "profile_image_large": null,
        "profile_image_medium": null,
        "profile_image_small": null,
        "company_id": 28,
        "approval_status": 0,
        "allowed_quotations_per_rfq": 3
      },
      "login_details": {
        "number_of_login": 34,
        "last_login": "2021-10-23T12:51:31.000000Z"
      }
    }
  }

  const incomplete = {
    "message": "Company details",
    "data": {
      "id": 35,
      "name": "add",
      "registration_number": null,
      "vat_number": null,
      "logo": null,
      "logo_xlarge": null,
      "logo_large": null,
      "logo_medium": null,
      "logo_small": null,
      "country_id": null,
      "country": null,
      "state_id": null,
      "state": null,
      "city_id": null,
      "city": null,
      "zipcode": null,
      "extended_zipcode": null,
      "district": null,
      "landmark": null,
      "street": null,
      "building_number": null,
      "unit_number": null,
      "address_line1": null,
      "address_line2": null,
      "landline": null,
      "mobile": null,
      "email": null,
      "website": null,
      "bank_id": null,
      "bank": null,
      "bank_account_name": null,
      "bank_iban": null,
      "bank_account_number": null,
      "type": 2,
      "documents": {
        "cr_certificate": null,
        "vat_certificate": null,
        "zakat_certificate": null,
        "signed_agreement": null,
        "national_address_proof": null
      },
      "is_approved": false,
      "is_rejected": false,
      "is_pending": false,
      "is_incomplete": true,
      "approval_notes": null,
      "registered_at": "2021-10-08T06:57:26.000000Z",
      "brands": [],
      "delivery_areas": [],
      "person_in_charge": {
        "first_name": null,
        "last_name": null,
        "title": null,
        "phone": null,
        "email": null
      },
      "settings": {
        "auto_approve_rfqs": false,
        "show_company_name": false,
        "is_credit_limit_active": false,
        "credit_limit": "0.00",
        "pay_term": 0,
        "is_delivery_supported": false,
        "has_bidding_platform_access": false,
        "bidding_platform_sparehub_commission": "0.00",
        "has_erp_platform_access": false,
        "erp_platform_sparehub_commission": "0.00",
        "has_marketplace_platform_access": false,
        "marketplace_platform_sparehub_commission": "0.00",
        "has_workshops_platform_access": false,
        "workshops_platform_sparehub_commission": "0.00",
        "has_ecommerce_platform_access": false,
        "ecommerce_platform_sparehub_commission": "0.00"
      },
      "company_admin": {
        "id": 35,
        "full_name": "dsadas ",
        "first_name": "dsadas",
        "last_name": "",
        "title": null,
        "phone": "",
        "email": "omar.hendi92@gmail.com",
        "username": "",
        "profile_image": null,
        "profile_image_xlarge": null,
        "profile_image_large": null,
        "profile_image_medium": null,
        "profile_image_small": null,
        "company_id": 35,
        "approval_status": 0,
        "allowed_quotations_per_rfq": 3
      },
      "login_details": {
        "number_of_login": 0,
        "last_login": null
      }
    }
  }
  return (
    <Container maxWidth="lg">
      {/* <CustomizedInputBase />
      <AutoGrid /> */}
      <Profile profile={incomplete?.data} incomplete={incomplete} />
    </Container>
  );
}

export default App;
