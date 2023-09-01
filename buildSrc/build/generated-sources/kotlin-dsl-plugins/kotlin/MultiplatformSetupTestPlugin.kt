/**
 * Precompiled [multiplatform-setup-test.gradle.kts][Multiplatform_setup_test_gradle] script plugin.
 *
 * @see Multiplatform_setup_test_gradle
 */
class MultiplatformSetupTestPlugin : org.gradle.api.Plugin<org.gradle.api.Project> {
    override fun apply(target: org.gradle.api.Project) {
        try {
            Class
                .forName("Multiplatform_setup_test_gradle")
                .getDeclaredConstructor(org.gradle.api.Project::class.java, org.gradle.api.Project::class.java)
                .newInstance(target, target)
        } catch (e: java.lang.reflect.InvocationTargetException) {
            throw e.targetException
        }
    }
}
