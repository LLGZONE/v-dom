describe("test", () => {
    const expected = [1, 2, 3, 4, 5, 6]
    it('matches even with an unexpected number 7', () => {
        expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
            expect.arrayContaining(expected)
        )
    })
})
