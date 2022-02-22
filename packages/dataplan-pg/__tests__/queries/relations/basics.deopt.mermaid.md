```mermaid
graph TD
    classDef path fill:#eee,stroke:#000,color:#000
    classDef plan fill:#fff,stroke-width:3px,color:#000
    classDef itemplan fill:#fff,stroke-width:6px,color:#000
    classDef sideeffectplan fill:#f00,stroke-width:6px,color:#000

    %% subgraph fields
    P1{{"~"}}:::path
    P2{{">message"}}:::path
    P3([">message>id"]):::path
    %% P2 -.-> P3
    P4([">message>body"]):::path
    %% P2 -.-> P4
    P5{{">message>forum"}}:::path
    P6([">message>forum>id"]):::path
    %% P5 -.-> P6
    P7([">message>forum>name"]):::path
    %% P5 -.-> P7
    %% P2 -.-> P5
    %% P1 -.-> P2
    %% end

    %% define plans
    __Value_3["__Value[_3∈0]<br /><context>"]:::plan
    __Value_5["__Value[_5∈0]<br /><rootValue>"]:::plan
    InputStaticLeaf_7["InputStaticLeaf[_7∈0]"]:::plan
    PgSelect_8["PgSelect[_8∈0]<br /><messages>"]:::plan
    First_12["First[_12∈0]"]:::plan
    PgSelectSingle_13["PgSelectSingle[_13∈0]<br /><messages>"]:::plan
    PgClassExpression_14["PgClassExpression[_14∈0]<br /><__messages__.#quot;id#quot;>"]:::plan
    PgClassExpression_15["PgClassExpression[_15∈0]<br /><__messages__.#quot;body#quot;>"]:::plan
    PgClassExpression_16["PgClassExpression[_16∈0]<br /><__messages__.#quot;forum_id#quot;>"]:::plan
    PgSelect_17["PgSelect[_17∈0]<br /><forums>"]:::plan
    Access_18["Access[_18∈0]<br /><_3.pgSettings>"]:::plan
    Access_19["Access[_19∈0]<br /><_3.withPgClient>"]:::plan
    Object_20["Object[_20∈0]<br /><{pgSettings,withPgClient}>"]:::plan
    First_21["First[_21∈0]"]:::plan
    PgSelectSingle_22["PgSelectSingle[_22∈0]<br /><forums>"]:::plan
    PgClassExpression_24["PgClassExpression[_24∈0]<br /><__forums__.#quot;name#quot;>"]:::plan

    %% plan dependencies
    Object_20 --> PgSelect_8
    InputStaticLeaf_7 --> PgSelect_8
    PgSelect_8 --> First_12
    First_12 --> PgSelectSingle_13
    PgSelectSingle_13 --> PgClassExpression_14
    PgSelectSingle_13 --> PgClassExpression_15
    PgSelectSingle_13 --> PgClassExpression_16
    Object_20 --> PgSelect_17
    PgClassExpression_16 --> PgSelect_17
    __Value_3 --> Access_18
    __Value_3 --> Access_19
    Access_18 --> Object_20
    Access_19 --> Object_20
    PgSelect_17 --> First_21
    First_21 --> PgSelectSingle_22
    PgSelectSingle_22 --> PgClassExpression_24

    %% plan-to-path relationships
    __Value_5 -.-> P1
    PgSelectSingle_13 -.-> P2
    PgClassExpression_14 -.-> P3
    PgClassExpression_15 -.-> P4
    PgSelectSingle_22 -.-> P5
    PgClassExpression_16 -.-> P6
    PgClassExpression_24 -.-> P7

    %% allocate buckets
    classDef bucket0 stroke:#696969
    class __Value_3,__Value_5,InputStaticLeaf_7,PgSelect_8,First_12,PgSelectSingle_13,PgClassExpression_14,PgClassExpression_15,PgClassExpression_16,PgSelect_17,Access_18,Access_19,Object_20,First_21,PgSelectSingle_22,PgClassExpression_24 bucket0
```