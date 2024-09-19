import { expect, test } from "vitest"
import getNoteFromKey from "./noteUtils"


test('si le paso la letra a devolvera C4'), () => {
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
}

test('si no le paso letra devolvera undefined'), () => {
    let note = getNoteFromKey(null)
    expect(note).toBeUndefined()
}

test('si no le paso letra devolvera undefined'), () => {
    let note = getNoteFromKey()
    expect(note).toBeUndefined()
}