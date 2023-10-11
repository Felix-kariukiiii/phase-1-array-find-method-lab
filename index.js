function superbowlWin(superbowlRecords) {
    let winningRecord = superbowlRecords.find(record => record.result ==="W");
    return winningRecord ? winningRecord.year : undefined;
}
