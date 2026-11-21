export * from "./types";
export * from "./board";
import type { CheckersEngine } from "./types";

/**
 * PONTO DE INTEGRAÇÃO DO MOTOR.
 * Substitua `null` por uma implementação de CheckersEngine (ex.: `brazilianEngine`).
 * Enquanto for null, a UI mostra "Em desenvolvimento" e não executa jogadas.
 */
export const checkersEngine: CheckersEngine | null = null;
