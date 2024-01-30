import {GameDomain} from "../game/gameDomain";
import {BoneClass} from "../game/boneClass";

describe("Тестируем инициализацию пятнашек", () => {


    test('Проверяем, что у всех костей правильная строка', () => {
        const domain = new GameDomain();
        expect((domain.matrix[0] as BoneClass).getRow()).toBe(0)
        expect((domain.matrix[1] as BoneClass).getRow()).toBe(0)
        expect((domain.matrix[2] as BoneClass).getRow()).toBe(0)
        expect((domain.matrix[3] as BoneClass).getRow()).toBe(0)

        expect((domain.matrix[4] as BoneClass).getRow()).toBe(1)
        expect((domain.matrix[5] as BoneClass).getRow()).toBe(1)
        expect((domain.matrix[6] as BoneClass).getRow()).toBe(1)
        expect((domain.matrix[7] as BoneClass).getRow()).toBe(1)

        expect((domain.matrix[8] as BoneClass).getRow()).toBe(2)
        expect((domain.matrix[9] as BoneClass).getRow()).toBe(2)
        expect((domain.matrix[10] as BoneClass).getRow()).toBe(2)
        expect((domain.matrix[11] as BoneClass).getRow()).toBe(2)

        expect((domain.matrix[12] as BoneClass).getRow()).toBe(3)
        expect((domain.matrix[13] as BoneClass).getRow()).toBe(3)
        expect((domain.matrix[14] as BoneClass).getRow()).toBe(3)

    })


     test('Проверяем, что у всех костей правильный столбец', () => {
         const domain = new GameDomain();

         expect((domain.matrix[0] as BoneClass).getColumn()).toBe(0)
         expect((domain.matrix[1] as BoneClass).getColumn()).toBe(1)
         expect((domain.matrix[2] as BoneClass).getColumn()).toBe(2)
         expect((domain.matrix[3] as BoneClass).getColumn()).toBe(3)

         expect((domain.matrix[4] as BoneClass).getColumn()).toBe(0)
         expect((domain.matrix[5] as BoneClass).getColumn()).toBe(1)
         expect((domain.matrix[6] as BoneClass).getColumn()).toBe(2)
         expect((domain.matrix[7] as BoneClass).getColumn()).toBe(3)

         expect((domain.matrix[8] as BoneClass).getColumn()).toBe(0)
         expect((domain.matrix[9] as BoneClass).getColumn()).toBe(1)
         expect((domain.matrix[10] as BoneClass).getColumn()).toBe(2)
         expect((domain.matrix[11] as BoneClass).getColumn()).toBe(3)

         expect((domain.matrix[12] as BoneClass).getColumn()).toBe(0)
         expect((domain.matrix[13] as BoneClass).getColumn()).toBe(1)
         expect((domain.matrix[14] as BoneClass).getColumn()).toBe(2)
     })
 })
