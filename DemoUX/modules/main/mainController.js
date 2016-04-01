/// <reference path="../../Scripts/jquery-1.12.0.min.js" />
"use strict";

angular.module("main")

    .controller("mainController",
        ['$scope' , function ($scope) {

            //------------------------------------------------------------------------------------------
            //------------------------------------ PRIVATE VARIABLES------------------------------------
            //------------------------------------------------------------------------------------------
            var init = function () {
                $scope.step.count = 2;
                $scope.step.message = $scope.step.message1;
            };

            var setMessage = function () {

                switch ($scope.step.count) {
                    case 1:
                        $scope.step.message = $scope.step.message1;
                        break;
                    case 2:
                        $scope.step.message = $scope.step.message2;
                        break;
                    case 3:
                        $scope.step.message = $scope.step.message3;
                        break;
                    case 4:
                        $scope.step.message = $scope.step.message4;
                        break;
                    case 5:
                        $scope.step.message = $scope.step.message5;
                        break;
                    case 6:
                        $scope.step.message = $scope.step.message6;
                        break;
                    case 7:
                        $scope.step.message = $scope.step.message7;
                        break;
                    case 8:
                        $scope.step.message = $scope.step.message8;
                        break;
                    case 9:
                        $scope.step.message = $scope.step.message9;
                        break;
                    
                }
            }

            //------------------------------------------------------------------------------------------
            //------------------------------------ SCOPED VARIABLES AND FUNCTIONS----------------
            //------------------------------------------------------------------------------------------
            $scope.isMenuVisible = true;
            $scope.isMenuButtonVisible = true;
                        
            $scope.clickme = function () {

                console.log("VALUE");
                var t = $('#example').dataTable();
                var counter = 1;

                t.row.add([
                    counter + '.1',
                    counter + '.2',
                    counter + '.3',
                    counter + '.4',
                    counter + '.5'
                ]).draw(false);

                counter++;

            };

            $scope.$on('ux-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
                //$location.path(data.route);

            });

            $scope.step = {
                count: 1,
                message: '',
                message1: "NAME AND MAILING ADDRESS (Make necessary corrections to the printed name and mailing address.)",
                message2: "A. PROPERTY",
                message3: "B. TRANSFEROR(S)/SELLER(S) (additional transferors please complete “B” on next page)",
                message4: "CERTIFICATION",
                message5: "C. TRANSFEREE(S)/BUYER(S) (additional transferees please complete “C” below)",
                message6: "B. ADDITIONAL TRANSFEROR(S)/SELLER(S) (continued)",
                message7: "C. ADDITIONAL TRANSFEREE(S)/BUYER(S) (continued)",
                message8: "CLAIM FOR REASSESSMENT EXCLUSION FOR TRANSFER BETWEEN PARENT AND CHILD Revenue and Taxation Code, Section 63.1",
                message9: "Thank You. Your application has been submitted",
            };

            $scope.forms = {
                form1: {
                    "address": "PROPERTY ADDRESS",
                    "addressFull": '',
                    "parcel": "ASSESSORs_PARCEL_NUMBER",
                    "parcelNumber": '',
                    "recorderDate": "RECORDER’S DOCUMENT NUMBER DATE OF PURCHASE OR TRANSFER",
                    "probateNumber": "PROBATE NUMBER",
                    "dateOfDeath": "Date Of Death",
                    "city": "CITY",
                    "cityName": "",
                    "docNumber": "RECORDER’S DOCUMENT NUMBER",
                    "dateOfPurchaseOrTransfer": "DATE OF PURCHASE OR TRANSFER",
                    "dateOfDecreeDistribution": "DATE OF DECREE OF DISTRIBUTION (if applicable)",
                    "disclosure": "The disclosure of social security numbers is mandatory as required by Revenue and Taxation Code section 63.1. [See Title 42 United States Code, section 405(c)(2)(C)(i) which authorizes the use of social security numbers for identification purposes in the administration of any tax.] A foreign national who cannot obtain a social security number may provide a tax identification number issued by the Internal Revenue Service. The numbers are used by the Assessor and the state to monitor the exclusion limit. "
                },

                //TRANSFEROR(S)/SELLER(S) (additional transferors please complete “B” on the reverse)
                form2 : {
                    "fullname":"Full name(s) of transferor",
                    "ssn":"Social security number",
                    "transferee":"Family relationship(s) to transferee(s)",
                    "adoption":"If adopted, age at time of adoption",
                    "residence":"Was this property the transferor’s principal residence",
                    "check": 'If yes, please check which of the following exemptions was granted or was eligible to be granted on this property:',
                    "exclusion": "Have	there	been	other	WUDQVIHUs	that	qualified	for	this	exclusion?	",
                    "check2": "If yes,	please	attach	a	list	of	all	previous	transfers	that	qualified	for	this	exclusion.	(This	list	should	include	for	each	property:	the	County,Assessor’s parcel number, address, date of transfer, names of all the transferees/buyers, and family relationship. Transferor’s principal residence	must be	identified.)",
                    "partial": "Was only a partial interest in the property transferred?",
                    "percentage": "If yes, percentage transferred %?",
                    "tenancy":"Was this property owned in joint tenancy?",
                    "trust": "8. If the transfer was through the medium of a trust, you must attach a copy of the trust."
                },

                //CERTIFICATION
                form3 : {
                    "sign":"SIGNATURE OF TRANSFEROR OR LEGAL REPRESENTATIVE",
                    "DATE1": '',
                    "sign2":"Signature of Transferor OR Legal Representative",
                    "DATE2": '',
                    "address":"Mailing Address",
                    "phone": "Day time Phone Number",
                    "city": '',
                    "state": '',
                    "zip": '',
                    "email": ''
                },

                certificateMsg: "I certify (or declare) under penalty of perjury under the laws of the State of California that the foregoing and all information hereon, including any accompanying statements or documents, is true and correct to the best of my knowledge and that I am the parent or child (or transferee’s legal representative) of the transferors listed in Section B; and that all of the transferees are eligible transferees within the meaning of section 63.1 of the Revenue and Taxation Code.",

                importantNote : {
                    "message": "IMPORTANT: In order to qualify for this exclusion, a claim form must be completed and signed by the transferors and a transferee and filed with the Assessor. A claim form is timely filed if it is filed within three years after the date of purchase or transfer, or prior to the transfer of the real property to a third party, whichever is earlier. If a claim form has not been filed by the date specified in the preceding sentence, it will be timely if filed within six months after the date of mailing of a notice of supplemental or escape assessment for this property. If a claim is not timely filed, the exclusion will be granted beginning with the calendar year in which you file your claim. Complete all of Sections A, B, and C and answer each question or your claim may be denied. Proof of eligibility, including a copy of the transfer document, trust, or will, may be required. In situations where all information is not known by the due date, the parties should file this claim with as much information as possible, and later amend the claim with any revised information. P",
                    "point1": "1. This exclusion only applies to transfers that occur on or after November 6, 1986;",
                    "point2": "2. In order to qualify, the real property must be transferred from parents to their children or children to their parents;",
                    "point3": "3. If you do not complete and return this form, it may result in this property being reassessed.",
                    "point4": "4. California law provides, with certain limitations, that a “change in ownership” does not include the purchase or transfer of:",
                    "point4a": "4.a. The	principal	residence	between	parents	and	children,	and/or",
                    "point4b": "4.b. The	first	$1,000,000	of	the factored base year value of other	real	property	between	parents	and	children",
                    "note": "NOTE: Effective January 1, 2009, Revenue and Taxation Code Section 63.1(j) allows a county board of supervisors to authorize a one-time processing	fee	of	not	more	than	$175	to	recover	costs	incurred	by	the	county	assessor	due	to	the	failure	of	an	eligible	transferee	to	file	a	claim	for  the parent-child change in ownership exclusion after two written requests have been sent to an eligible transferee by the county assessor. "
                }
              
            };

            $scope.Date = {
                "date1": '',
                "date2":'',
                "date3":'',
            };

            $scope.next = function (){
                $scope.step.count = $scope.step.count + 1;
                setMessage();
            };

            $scope.back = function () {
                $scope.step.count = $scope.step.count - 1;
                setMessage();
            };

            $scope.submitForm = function () {
                $scope.step.count = $scope.step.count + 1;
                $scope.step.message = $scope.step.message9;
            };

            $scope.startNew = function () {
                init();
            }
            init(); // begining function
            
        }]
    );