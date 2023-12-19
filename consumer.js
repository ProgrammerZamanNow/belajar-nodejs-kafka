import {Kafka} from "kafkajs";

const kafka = new Kafka({
    "brokers" : ["localhost:9092"]
});

const consumer = kafka.consumer({
    groupId: "nodejs"
});

await consumer.subscribe({
    topic: "helloworld",
    fromBeginning: true
});

await consumer.connect();

await consumer.run({
    eachMessage: async (record) => {
        const message = record.message;
        console.info(message.value.toString())
    }
});
