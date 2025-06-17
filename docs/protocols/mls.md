# polyproto-mls Extension Specification

**Namespace:** `mls`

**Version:** `v1.0-alpha.1`

**Base Path:** `/.p2/mls/v1/`

[Semantic versioning v2.0.0](https://semver.org/spec/v2.0.0.html) is used to version this
specification.

The polyproto-mls extension defines how Messaging Layer Security (herein after referred to as its
commonly used acronym, MLS) integrates with polyproto. The basis of this document is
[IETF RFC 9420](https://www.rfc-editor.org/rfc/rfc9420.html).

## 1. Cryptographic Suites

This section lists pre-defined cryptographic suites that can be implemented by polyproto-mls
compatible implementations.

| Name        | Numeric Identifier (MLS Numeric Value) | Quantum-Secure? | Recommended? | Required? |
| ----------- | -------------------------------------- | --------------- | ------------ | --------- |
| MLS default | `0x0001`                               | No              | Yes          | Yes       |
| Hybrid PQS  | `0xF110`                               | Yes             | Yes          | Yes       |

### 1.1. MLS default cipher suite

In coherence with section #6.5 of the core polyproto specification document and section #17.1 of RFC
9420, the cipher suite `MLS_128_DHKEMX25519_AES128GCM_SHA256_Ed25519` must be implemented by
polyproto-mls implementations. This cipher suite uses Curve25519 for key exchange,
[AES-128-GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) for
[HPKE](https://www.rfc-editor.org/rfc/rfc9180.html),
[HKDF](<https://blindterran.github.io/ComputerScienceWiki/Cyber-Security/Network-Security/HMAC-Key-Derivation-Function-(HKDF)>)
over SHA2-256, and Ed25519 for signatures.

| MLS Cipher Suite Component | Component   | Quantum-Secure? |
| -------------------------- | ----------- | --------------- |
| Key Exchange               | Curve25519  | No              |
| HPKE                       | AES-128-GCM | Partially       |
| HKDF                       | SHA2-256    | Partially       |
| Signatures                 | Ed25519     | No              |

### 1.2. Hybrid PQC cipher suite

polyproto-mls v1 offers a
[Post-Quantum cryptography (PQC)](https://en.wikipedia.org/wiki/Post-quantum_cryptography) cipher
suite in order to resist possible cryptanalytic attacks by a quantum computer on encrypted messages
shared via polyproto-mls.

:::info

The MLS working group is considering adoption of the draft document
[ML-KEM and Hybrid Cipher Suites for MLS](https://datatracker.ietf.org/doc/html/draft-mahy-mls-pq).
Until official recommendations are made regarding eligible, well-suited cipher suites for hybrid,
Post-Quantum/Traditional authenticity and confidentiality guarantees, polyproto-mls may either
employ a temporary, own cipher suite, or leave this particular section unfinished.

:::

## 2. Home Server Responsibilities

Services aiming to be compliant with polyproto-mls v1 must take on the roles of Authentication
Service (AS) and Delivery Service (DS) in the context of Messaging Layer Security.

:::note[Quote from the MLS Architecture Document:]

> An Authentication Service (AS), which is responsible for attesting to bindings between
> application-meaningful identifiers and the public key material used for authentication in the MLS
> protocol. The AS must also be able to generate credentials that encode these bindings and validate
> credentials provided by MLS clients.<br/> A Delivery Service (DS), which can receive and
> distribute messages between group members. In the case of group messaging, the DS may also be
> responsible for acting as a "broadcaster" where the sender sends a single message which is then
> forwarded to each recipient in the group by the DS. The DS is also responsible for storing and
> delivering initial public key material required by MLS clients in order to proceed with the group
> secret key establishment that is part of the MLS protocol.

_[Source](https://messaginglayersecurity.rocks/mls-architecture/draft-ietf-mls-architecture.html#name-abstract-services)_

:::
