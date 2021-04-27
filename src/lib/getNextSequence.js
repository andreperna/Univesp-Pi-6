const getNextSequence = async (db, nameId) => {
    const ret = await db.collection("_counters").findOneAndUpdate({ _id: nameId }, { $inc: { seq: 1 } });
    return ret.value.seq;
};

module.exports = { getNextSequence };
