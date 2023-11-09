// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CertificateRegistry {


    enum CertificateType { Business, Charity }

    struct Certificate {
        bytes32 certificateHash;
        address issuer;
        CertificateType certificateType;
        string certificateID;
        string issuanceDate;
        string businessInfo; // Business and Charity Information
        address donationAddress; // Only for Charity Certificates
        bool isIssued;
    }

    // Mapping
    mapping(string => Certificate) private businessCertificates;
    mapping(string => Certificate) private charityCertificates;

    // Events
    event CertificateIssued(string indexed certificateID, address indexed issuer, CertificateType indexed certificateType, string issuanceDate, string businessInfo, address donationAddress);

    // Functions

    function issueBusinessCertificate(string memory certificateID, string memory issuanceDate, string memory businessInfo) external {
        require(!businessCertificates[certificateID].isIssued, "Certificate already issued");

        businessCertificates[certificateID] = Certificate(keccak256(abi.encodePacked(CertificateType.Business, certificateID, issuanceDate, businessInfo)), msg.sender, CertificateType.Business, certificateID, issuanceDate, businessInfo, address(0), true);

        emit CertificateIssued(certificateID, msg.sender, CertificateType.Business, issuanceDate, businessInfo, address(0));
    }

    function issueCharityCertificate(string memory certificateID, string memory issuanceDate, string memory businessInfo, address donationAddress) external {
        require(!charityCertificates[certificateID].isIssued, "Certificate already issued");

        charityCertificates[certificateID] = Certificate(keccak256(abi.encodePacked(CertificateType.Charity, certificateID, issuanceDate, businessInfo, donationAddress)), msg.sender, CertificateType.Charity, certificateID, issuanceDate, businessInfo, donationAddress, true);

        emit CertificateIssued(certificateID, msg.sender, CertificateType.Charity, issuanceDate, businessInfo, donationAddress);
    }

    function isBusinessCertificateIssued(string memory certificateID) external view returns (bool) {
        return businessCertificates[certificateID].isIssued;
    }

    function isCharityCertificateIssued(string memory certificateID) external view returns (bool) {
        return charityCertificates[certificateID].isIssued;
    }

    function getBusinessCertificateInfo(string memory certificateID) external view returns (bytes32, address, CertificateType, string memory, string memory, address, bool) {
        Certificate memory certificate = businessCertificates[certificateID];
        return (certificate.certificateHash, certificate.issuer, certificate.certificateType, certificate.issuanceDate, certificate.businessInfo, certificate.donationAddress, certificate.isIssued);
    }

    function getCharityCertificateInfo(string memory certificateID) external view returns (bytes32, address, CertificateType, string memory, string memory, address, bool) {
        Certificate memory certificate = charityCertificates[certificateID];
        return (certificate.certificateHash, certificate.issuer, certificate.certificateType, certificate.issuanceDate, certificate.businessInfo, certificate.donationAddress, certificate.isIssued);
    }
}