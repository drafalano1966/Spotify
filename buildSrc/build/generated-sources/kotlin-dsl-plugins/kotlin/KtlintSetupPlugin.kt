/**
 * Precompiled [ktlint-setup.gradle.kts][Ktlint_setup_gradle] script plugin.
 *
 * @see Ktlint_setup_gradle
 */
class KtlintSetupPlugin : org.gradle.api.Plugin<org.gradle.api.Project> {
    override fun apply(target: org.gradle.api.Project) {
        try {
            Class
                .forName("Ktlint_setup_gradle")
                .getDeclaredConstructor(org.gradle.api.Project::class.java, org.gradle.api.Project::class.java)
                .newInstance(target, target)
        } catch (e: java.lang.reflect.InvocationTargetException) {
            throw e.targetException
        }
    }
}
